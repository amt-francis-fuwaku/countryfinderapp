import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { darkModeTextStyle, menuStyle, menuTextStyle } from "./menustyle";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const MenuComponent = () => {
    const theme = useThemeProvider();
    return (
        <div className={menuStyle} style={theme.theme}>
            <div className="place-self-center ml-2">
                <p className={menuTextStyle}>where in the world?</p>
            </div>
            <div className="flex place-items-center ">
                <div className="mr-2">
                    <FontAwesomeIcon icon={regularMoon} />
                </div>
                <div onClick={theme.toggle}>
                    <p className={darkModeTextStyle}>Dark Mode</p>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
