import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { inputBarStyle, searchBarStyle } from "./searchbar_style";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { useEffect, useState } from "react";
import { useDataProvider } from "../../context_data/useDataProvider";

const SearchBarComponent = () => {
    const theme = useThemeProvider();
    const countryData = useDataProvider();
    const data = countryData?.data;
    const setData = countryData?.setData;

    const [searchedCountry, setSearchedCountry] = useState("");

    const handleSearch = (e: any) => {
        const value = e.currentTarget.value;
        setSearchedCountry((prev: string) => (prev = value));
    };

    const filtered = async () => {
        const counter = searchedCountry.length;
        if (counter) {
            const filteredData = data?.filter((item: any) =>
                item.name.common.toLowerCase().includes(searchedCountry.trim())
            );
            setData(filteredData);
        } else if (!searchedCountry) {
            countryData.fetchData();
        }
    };

    useEffect(() => {
        filtered();
    }, [searchedCountry.length]);
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
                        onChange={handleSearch}
                        value={searchedCountry}
                        type="text"
                        placeholder="search for a country....."
                        className={inputBarStyle}
                        style={theme.theme}
                    />
                </form>
            </div>
        </>
    );
};

export default SearchBarComponent;
