import { createContext, ReactNode, useEffect, useState } from "react";

// Component children
type ContextComponentProps = {
    children: ReactNode;
};

// App theme data
interface Theme {
    [key: string]: {
        background: string;
        color: string;
    };
}

// Export this to your useContext() file
interface ContextProviderValue {
    toggle: () => void;
    theme: Theme;
}

// Shared data for the app
export const DataProvider = createContext<ContextProviderValue | null>(null);

const ThemeProvider = ({ children }: ContextComponentProps) => {
    const themeData: Theme = {
        light: { background: "white", color: "black" },
        dark: { background: "#2B3844", color: "white" },
    };

    // Get the theme from local storage or use the default theme
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme ? storedTheme : "light";

    // Stores theme value
    const [theme, setTheme] = useState(initialTheme);

    // Changes theme
    const toggleTheme = () => {
        console.log("toggled", theme);
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    // Update the local storage when the theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // App context provider data
    const providerData: ContextProviderValue = {
        toggle: toggleTheme,
        theme: themeData[theme],
    };

    return (
        <DataProvider.Provider value={providerData}>
            {children}
        </DataProvider.Provider>
    );
};

export default ThemeProvider;
