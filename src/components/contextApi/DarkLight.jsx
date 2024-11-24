import {createContext, useState,use } from "react";
import "./darktheme.css"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    
    const [theme , setTheme] = useState("dark")
    const handleToggleTheme = ()=> {
        return setTheme ((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{theme, handleToggleTheme}}>{children}</ThemeContext.Provider>
    )

}

// creating a component  

export const DarkLight = ()=> {
    const { theme , handleToggleTheme} = use(ThemeContext)
    return (
        <div className={`${theme === "dark" ? "bg-gray-800": "bg-white"}`}>
            <h1>dark light theme website</h1>
            <h3>welcome to react 19 </h3>
            <button onClick={handleToggleTheme}> {theme === "dark" ? "switch to light mode" : "switch to dark mode"}</button>
        </div>
    )
} 
