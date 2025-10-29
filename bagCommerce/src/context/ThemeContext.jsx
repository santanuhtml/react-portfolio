import { createContext } from "react";
import { useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light'
    });

    useEffect(() => {
        // This line adds (or updates) a custom HTML attribute "data-theme" on the root <html> tag.
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>{
        setTheme((prev)=> (prev === 'light' ? 'dark' : 'light'));
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export {ThemeProvider};
export default ThemeContext;