import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

// context data
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { useDataProvider } from "../../context_data/useDataProvider";

//data types
import { CountryData } from "../../utils/data";

const SearchBarComponent = () => {
    //defines and set data
    const theme = useThemeProvider();
    const countryData = useDataProvider();
    const data = countryData?.data;
    const setData = countryData?.setData;

    const [searchedCountry, setSearchedCountry] = useState("");

    //set the searched term
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchedCountry(e?.currentTarget.value);
    };

    //filter the data for the searched country
    const filtered = async () => {
        if (searchedCountry) {
            const filteredData: CountryData = await data?.filter(
                (item: CountryData) =>
                    item.name.common
                        .toLowerCase()
                        .includes(searchedCountry.trim())
            );
            setData(filteredData);
        } else if (!searchedCountry || searchedCountry.trim() === "") {
            countryData.fetchData();
            setData(data);
        }
    };

    useEffect(() => {
        //use debounce for efficiency
        const deb = debounce(() => filtered(), 500);
        deb();

        //cancel debounce
        return () => {
            deb.cancel();
        };
    }, [searchedCountry]);
    return (
        <>
            <div
                className="flex flex-row justify-center items-center  h-[48px] rounded-md bg-white shadow-lg ml-[16px] mr-[16px] lg:h-[56px] lg:w-[480px]"
                style={theme.theme}
            >
                <div>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="lg"
                        style={{ color: `${theme.theme.color}` }}
                        className="px-[25px]"
                    />
                </div>
                <input
                    onChange={handleSearch}
                    value={searchedCountry}
                    type="text"
                    placeholder="search for a country....."
                    style={{ ...theme.theme, width: "100%" }}
                    className="focus:ring-0 placeholder-slate-300  rounded-r-md focus:ring-slate-100 text-xs  focus:outline-none"
                />
            </div>
        </>
    );
};

export default SearchBarComponent;
