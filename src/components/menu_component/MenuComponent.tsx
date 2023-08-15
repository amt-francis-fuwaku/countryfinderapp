import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { menuStyle } from "./menustyle";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { useEffect, useState } from "react";

const MenuComponent = () => {
    const theme = useThemeProvider();
    const storedTheme = localStorage.getItem("theme");
    const initialTheme: string = storedTheme ? storedTheme : "Light";
    // Stores theme value
    const [mode, setMode] = useState(initialTheme);
    const toggleMode = () => {
        setMode((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
    };

    useEffect(() => {}, [mode]);

    return (
        <div className={menuStyle} style={theme.theme}>
            <p className="place-self-center text-[14px] font-bold ">
                where in the world?
            </p>

            <div
                className="flex place-items-center space-x-1 text-[12px] cursor-pointer "
                onClick={() => {
                    toggleMode();
                    theme.toggle();
                }}
            >
                <FontAwesomeIcon
                    icon={mode === "Light" ? regularMoon : faMoon}
                />

                <p>{mode} Mode</p>
            </div>
        </div>
    );
};

export default MenuComponent;
