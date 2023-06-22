import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { darkModeTextStyle, menuStyle, menuTextStyle } from "./menustyle";

const MenuComponent = () => {
    return (
        <div className={menuStyle}>
            <div className="place-self-center ml-2">
                <p className={menuTextStyle}>where in the world?</p>
            </div>
            <div className="flex place-items-center ">
                <div className="mr-2">
                    <FontAwesomeIcon icon={regularMoon} />
                </div>
                <div>
                    <p className={darkModeTextStyle}>Dark Mode</p>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
