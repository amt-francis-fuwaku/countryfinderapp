import { useState } from "react";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//component css style
import { filterStyle } from "./filter_style";

const FilterComponent = () => {
    const [dropDown, setDropDown] = useState(false);
    return (
        <div className={filterStyle}>
            <div>
                <p>Filter by Region</p>
            </div>
            <div className="mr-4">
                <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: "#000000" }}
                />
            </div>
        </div>
    );
};

export default FilterComponent;
