import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
    light: "/themes/lara-light-blue/theme.css",
    dark: "/themes/lara-dark-blue/theme.css",
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("app-theme") || "light";
        applyTheme(saved);
    }, []);

    const applyTheme = (newTheme) => {
        const themeLink = document.getElementById("theme-link");
        themeLink.setAttribute("href", themes[newTheme]);

        localStorage.setItem("app-theme", newTheme);
        setTheme(newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        applyTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);