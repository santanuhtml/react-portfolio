import { Children, createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

    const AuthContext = createContext({
        user: null,
        isAuthenticated: false,
        login: () => { },
        logout: () => { },
        pageLoader: true,
        hasRole: () => false,
        hasPermission: () => false,
    });

    const AuthProvider = ({children}) =>{
        const [pageLoader, setPageLoader] = useState(true);
        const [user, setUser] = useState(null);

        // Helper:check if user is authenticated
        const isAuthenticated = user ? true : false;

        // Helper:check user role
        const hasRole = (role) => user ? user.role === role : false;

        // Helper: check user permissions (expand as needed)
        // const hasPermission = (permission) => {
        //     if (!user || !user.permissions) return false;
        //     return user.permissions.includes(permission);
        // };

        //Login: store only user ID in localStorage
        const login = (loggedInUser) =>{
            localStorage.setItem('userId', loggedInUser.id);
            setUser(loggedInUser);
        }

        //Logout: clear user from state and localStorage
        const logout = () =>{
            setUser(null)
            localStorage.removeItem('userId');
        }

        // On mount, restore user from localStorage by fetching from backend
        useEffect(() => {
            const storedId = localStorage.getItem('userId');
            if (storedId) {
                axios.get('https://6903141ad0f10a340b22837e.mockapi.io/bagcommerceUsers/'+storedId)
                    .then(response => setUser(response.data))
                    .catch(() => setUser(null))
                    .finally(() => setPageLoader(false));
            } else {
                setPageLoader(false);
            }
        }, []);

        return(
            <AuthContext.Provider value={{user, isAuthenticated, login, logout, pageLoader, hasRole }}>
                 {children}
            </AuthContext.Provider>
        )
    }

export {AuthProvider};
export default AuthContext;