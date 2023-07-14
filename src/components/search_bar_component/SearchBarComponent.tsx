import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { inputBarStyle, searchBarStyle } from "./searchbar_style";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { useState } from "react";
import { useDataProvider } from "../../context_data/useDataProvider";

const SearchBarComponent = () => {
    const theme = useThemeProvider();
    const countryData = useDataProvider();
    const data = countryData?.data;
    const setData = countryData?.setData;

    const [searchedCountry, setSearchedCountry] = useState("");

    const getFilteredByName = () => {
        const filteredData = data?.filter((item) =>
            item.name.common.toLowerCase().includes(searchedCountry.trim())
        );
        if (searchedCountry) {
            setData(filteredData);
        } else if (!searchedCountry) {
            setData(data);
            console.log(data);
        }
    };

    const getSearchedCountryData = (e: string) => {
        setSearchedCountry(e.toLowerCase());
        getFilteredByName();
    };

    return (
        <>
            <div className={searchBarStyle} style={theme.theme}>
                <div className="m-8 ">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="lg"
                        style={{ color: `${theme.theme.color}` }}
                    />
                </div>
                <form>
                    <input
                        onChange={(e) => {
                            getSearchedCountryData(e.currentTarget.value);
                        }}
                        value={searchedCountry}
                        type="text"
                        placeholder="search for a country..."
                        className={inputBarStyle}
                        style={theme.theme}
                    />
                </form>
            </div>
        </>
    );
};

export default SearchBarComponent;
