import { useState, useEffect } from "react";
import { dropDownList } from "../../utils/drop_down_list";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//context provider
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { useDataProvider } from "../../context_data/useDataProvider";

// component
const FilterComponent = () => {
    //set theme
    const theme = useThemeProvider();

    //get  data
    const countryData = useDataProvider();
    const data = countryData?.data;

    //drop down data
    const [dropDown, setDropDown] = useState(true);
    const [selectedRegion, setSelectedRegion] = useState("");

    //toggles dropdown list
    const toggleDropDownList = () => setDropDown(!dropDown);

    //displays selected region to the user
    const showSelectedRegion = async (e: number) => {
        await countryData.fetchData(); //fetch data
        toggleDropDownList(); //hide or show drp down list
        setSelectedRegion(dropDownList[e]); //set  selected region
    };

    // filter to display the right filtered data
    const filteredData = async () => {
        await countryData.fetchData();
        if (selectedRegion === "All Countries") {
            await countryData.fetchData();
        } else if (selectedRegion) {
            const filtered = data?.filter(
                (region: any) => region?.region === selectedRegion
            );
            countryData?.setData(filtered);
        }
    };

    useEffect(() => {
        filteredData();
    }, [selectedRegion]);

    return (
        <>
            <div
                className=" flex justify-between text-[14px] items-center ml-[16px] mt-10 h-[48px] w-[200px] rounded-md bg-white shadow-lg mr-[16px] lg:h-[56px] lg:w-[480px]"
                style={theme.theme}
                onClick={toggleDropDownList}
            >
                <p className="ml-[16px] ">
                    {selectedRegion || "Filter by Region"}
                </p>

                <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: `${theme.theme.color}` }}
                    className="mr-[16px]"
                />
            </div>
            {!dropDown && (
                <ul
                    className="flex flex-col text-[14px] fixed  justify-start ml-[16px] mt-1 h-[144px] w-[200px] rounded-md bg-white shadow-lg mr-[16px] lg:h-[56px] lg:w-[480px]"
                    style={theme.theme}
                >
                    {dropDownList.map((item, index) => (
                        <li
                            key={index}
                            value={index}
                            className="ml-[16px] transition ease-in-out delay-10 hover:scale-10 duration-10"
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
