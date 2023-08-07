import { NavLink } from "react-router-dom";
import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/select_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const AllCountryPage = () => {
    const countryData = useDataProvider();
    const theme = useThemeProvider();
    const filter = localStorage.getItem("filter");

    //get data from context
    let data = countryData?.data;
    if (filter === "All Countries") {
        countryData.fetchData();
    } else {
        data = countryData?.data?.filter(
            (country: any) => country.region === filter
        );
    }

    return (
        <section
            className="py-56 h-full lg:h-full lg:pb-[25%]"
            style={theme.theme}
        >
            <SearchBarComponent />
            <FilterComponent />

            <div className="grid mt-14 ml-14 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:mt-10 lg:ml-8">
                {data?.map((country: any, index: number) => (
                    <NavLink
                        to={{ pathname: "/details" }}
                        state={country}
                        key={index}
                    >
                        <CardComponent data={country} />
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default AllCountryPage;
