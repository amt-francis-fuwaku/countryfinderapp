import { useState, useEffect } from "react";
import { dropDownList } from "../../utils/drop_down_list";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//css class
import { dropDownListStyle, filterStyle } from "./filter_style";

//context provider
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { useDataProvider } from "../../context_data/useDataProvider";
// import axios from "axios";

// component
const FilterComponent = () => {
    //set theme
    const theme = useThemeProvider();

    //get  data
    const countryData = useDataProvider();
    const data = countryData?.data;

    //drop down data
    const [dropDown, setDropDown] = useState(true);
    const storedValue = localStorage.getItem("filter");
    const [selectedRegion, setSelectedRegion] = useState(storedValue);
    const toggleDropDownList = () => setDropDown(!dropDown); //toggles dropdown list

    //displays selected region to the user
    const showSelectedRegion = async (e: number) => {
        await countryData.fetchData(); //fetch data
        setSelectedRegion(dropDownList[e]); //set  selected region
        toggleDropDownList(); //hide or show drp down list
    };

    //filter to display the right filtered data
    const filteredData = async () => {
        if (selectedRegion) {
            const filtered = data?.filter(
                (region: any) => region?.region === selectedRegion
            );
            countryData?.setData(filtered);
        }
    };

    useEffect(() => {
        filteredData();
        localStorage.setItem("filter", selectedRegion as string);
    }, [selectedRegion]);

    return (
        <>
            <div
                className={filterStyle}
                style={theme.theme}
                onClick={toggleDropDownList}
            >
                <div>
                    <p>
                        {selectedRegion ? selectedRegion : "Filter by Region"}
                    </p>
                </div>
                <div>
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
