import { useState } from "react";
import { dropDownList } from "../../utils/drop_down_list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { dropDownListStyle, filterStyle } from "./filter_style";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const FilterComponent = () => {
    const [dropDown, setDropDown] = useState(true);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    //toggles dropdown list
    const toggleDropDownList = () => setDropDown(!dropDown);

    //displays selected region to the user
    const showSelectedRegion = (region: number) => {
        setSelectedRegion(dropDownList[region]);
        toggleDropDownList();
    };

    const theme = useThemeProvider();

    return (
        <>
            <div className={filterStyle} style={theme.theme}>
                <div>
                    <p>{selectedRegion || "Filter by Region"}</p>
                </div>
                <div onClick={toggleDropDownList}>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: `${theme.theme.color}` }}
                    />
                </div>
            </div>
            {!dropDown && (
                <ul className={dropDownListStyle} style={theme.theme}>
                    {dropDownList.map((item, index) => (
                        <li
                            key={index}
                            value={index}
                            className="py-2"
                            onClick={(e) =>
                                showSelectedRegion(e.currentTarget.value)
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default FilterComponent;
