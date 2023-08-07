import { NavLink } from "react-router-dom";
import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/select_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const AllCountryPage = () => {
    const countryData = useDataProvider();
    const theme = useThemeProvider();

    //get data from context
    const data = countryData?.data;
    console.log("🚀 ", data);

    return (
        <section
            className="py-56 h-full lg:h-full lg:pb-[25%]"
            style={theme.theme}
        >
            <SearchBarComponent />
            <FilterComponent />
            <div className="ml-[12%] mt-[15%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:mt-10 lg:ml-[8%] ">
                {data?.map((country: any, index: number) => (
                    <NavLink
                        to={{ pathname: "/details" }}
                        state={country}
                        key={index}
                        className="ml-[12%] mt-[15%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:mt-10 lg:ml-[8%] "
                    >
                        <CardComponent data={country} />
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default AllCountryPage;
