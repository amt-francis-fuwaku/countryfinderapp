import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div
            className="flex justify-between items-center shadow-md m-0 top-0 left-0 bg-white fixed h-[80px] w-screen "
            style={theme.theme}
        >
            <p className="place-self-center text-[14px] font-bold ml-[16px]  md:ml-[80px] md:text-[24px] ">
                where in the world?
            </p>

            <div
                className="flex place-items-center h-fit space-x-1 text-[12px] cursor-pointer mr-[16px]  md:mr-[80px] md:text-[16px] "
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
