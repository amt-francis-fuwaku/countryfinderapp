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
        <div className="mt-[40px] text-[12px] w-[200px] sm:mt-0 md:mt-0 d:text-[14px]">
            <div
                className="flex justify-between cursor-pointer text-[14px] items-center  h-[50px] w-[200px] rounded-md bg-white shadow-lg  md:w-[200px] "
                style={theme.theme}
                onClick={toggleDropDownList}
            >
                <p className="ml-[16px] font-medium ">
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
                    className="flex pt-2 flex-col fixed justify-start  mt-1 h-[144px] w-[200px] rounded-md bg-white shadow-md  md:h-[164px] md:w-[200px] md:pt-5"
                    style={theme.theme}
                >
                    {dropDownList.map((item, index) => (
                        <li
                            key={index}
                            value={index}
                            className="ml-[16px] mb-[2px] transition ease-in-out delay-10 hover:scale-10 duration-10 cursor-pointer "
                            onClick={(e) =>
                                showSelectedRegion(e.currentTarget.value)
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FilterComponent;
