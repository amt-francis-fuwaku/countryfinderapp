import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { inputBarStyle, searchBarStyle } from "./searchbar_style";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const SearchBarComponent = () => {
    const theme = useThemeProvider();
    return (
        <>
            <div className={searchBarStyle} style={theme.theme}>
                <div className="m-8">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="lg"
                        style={{ color: "#b2b2b2" }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="search for a country..."
                        className={inputBarStyle}
                        style={theme.theme}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchBarComponent;
