import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//component css style
import { inputBarStyle, searchBarStyle } from "./searchbar_style";

const SearchBarComponent = () => {
    return (
        <>
            <div className={searchBarStyle}>
                <div className="m-8">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="lg"
                        style={{ color: "#b2b2b2" }}
                    />
                </div>
                <div>
                    {" "}
                    <input
                        type="text"
                        placeholder="search for a country..."
                        className={inputBarStyle}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchBarComponent;
