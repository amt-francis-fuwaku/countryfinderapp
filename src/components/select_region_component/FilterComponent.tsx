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

    // const filteredData = async () => {
    //     countryData.fetchData();
    //     if (!selectedRegion) {
    //         countryData?.setData(countryData.data);
    //     } else if (selectedRegion) {
    //         const filtered = countryData.data?.filter(
    //             (region) => region?.region === selectedRegion
    //         );
    //         countryData?.setData(filtered);
    //     }
    // };

    const filteredData = async () => {
        if (!selectedRegion) {
            countryData.fetchData();
        } else {
            countryData.fetchData();
            const filtered = countryData.data?.filter(
                (region: any) => region?.region === selectedRegion
            );
            countryData.setData(filtered);
            console.log("country data:", countryData.data);
            console.log("🚀selectedRegion:", selectedRegion);
        }
    };

    // const filteredByRegion = async () => {
    //     try {
    //         countryData.fetchData()
    //
    //         if (selectedRegion) {
    //             const regions = countryData.data?.filter((region)=>(region?.region === ))
    //             // const response = await axios.get(
    //             //     `https://restcountries.com/v3.1/region/${selectedRegion}`
    //             // );
    //             const data = await response.data;
    //             //set data
    //             countryData?.setData(data);
    //         }
    //     } catch (error) {
    //         throw new Error("Data not Found");
    //     }
    // };

    useEffect(() => {
        // filteredByRegion();
        filteredData();
    }, [selectedRegion]);

    return (
        <>
            <div
                className={filterStyle}
                style={theme.theme}
                onClick={toggleDropDownList}
            >
                <div>
                    <p>{selectedRegion || "Filter by Region"}</p>
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
