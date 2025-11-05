import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet, Navigate } from "react-router";
function AuthGuard(){

    const {isAuthenticated} = useContext(AuthContext);
    if(!isAuthenticated){
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}
export default AuthGuard;