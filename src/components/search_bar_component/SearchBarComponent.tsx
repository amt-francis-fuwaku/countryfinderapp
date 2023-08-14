import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

//component css style
import { inputBarStyle, searchBarStyle } from "./searchbar_style";

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
