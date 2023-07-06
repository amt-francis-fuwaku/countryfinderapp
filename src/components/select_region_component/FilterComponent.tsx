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
import axios from "axios";

// component
const FilterComponent = () => {
    //set theme
    const theme = useThemeProvider();
    const countryData = useDataProvider();

    const [dropDown, setDropDown] = useState(true);
    const [selectedRegion, setSelectedRegion] = useState("");

    //toggles dropdown list
    const toggleDropDownList = () => setDropDown(!dropDown);

    //displays selected region to the user
    const showSelectedRegion = (region: number) => {
        setSelectedRegion(dropDownList[region]);
        toggleDropDownList();
    };

    // const filteredData = () => {
    //     const filtered = data?.filter(
    //         (region) => region?.region === selectedRegion
    //     );
    //     if (selectedRegion) {
    //         console.log(">>>>>>>>Data", data, filtered);
    //         countryData?.setData(filtered);
    //     }
    // };

    const filteredByRegion = async () => {
        try {
            if (selectedRegion) {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/region/${selectedRegion}`
                );
                const data = await response.data;
                //set data
                countryData?.setData(data);
            }
        } catch (error) {
            throw new Error("Data not Found");
        }
    };

    useEffect(() => {
        filteredByRegion();
        // filteredData();
    }, [selectedRegion]);

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
