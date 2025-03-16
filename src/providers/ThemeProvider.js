import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export default function ThemeProvider(props) {
    const [isLightTheme, setLightTheme] = useState(() => {
        const storedTheme = localStorage.getItem("isLightTheme")

        return storedTheme === "true" ? true : false    
    })

    function toggleTheme() {
        setLightTheme(!isLightTheme)
        localStorage.setItem("isLightTheme", !isLightTheme)
    }



    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
