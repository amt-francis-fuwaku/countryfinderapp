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
            className=" flex shrink place-content-center shadow-md m-0 top-0 left-0 bg-white fixed h-[80px] w-full"
            style={theme.theme}
        >
            <div className="flex flex-row w-[100%] px-[16px] justify-between items-center sm:w-full md:justify-between md:items-center md:w-[100%] md:py-10] lg:w-[80%] lg:px-0">
                <p className="text-[14px] font-bold md:text-[24px]  ">
                    where in the world?
                </p>
                <div
                    className="flex  h-fit space-x-1 text-[12px] cursor-pointer  md:text-[16px] "
                    onClick={() => {
                        toggleMode();
                        theme.toggle();
                    }}
                >
                    <FontAwesomeIcon
                        icon={mode === "Light" ? regularMoon : faMoon}
                        className="place-self-center"
                    />

                    <p>{mode}Mode</p>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
