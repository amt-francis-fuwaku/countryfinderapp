import { NavLink } from "react-router-dom";
import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/filter_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { Data } from "../../context_data/DataProvider";
import LoadingComponent from "../../components/loading_component/LoadingComponent";

const AllCountryPage = () => {
    const countryData = useDataProvider();
    const theme = useThemeProvider();

    //get data from context
    const data = countryData?.data;

    //shows loading animation when data is loading

    return !data ? (
        <LoadingComponent message="fetching Data ...." />
    ) : (
        <>
            <section style={theme.theme} className="flex flex-col ">
                <div className=" flex flex-col px-[16px] pt-[30%] sm:pt-[20%] sm:flex sm:flex-row sm:justify-between sm:items-center  md:pt-10 md:m-0 md:w-full  md:flex lg:flex md:justify-between lg:w-[80%] lg:m-auto lg:py-10 lg:px-0">
                    <SearchBarComponent />
                    <FilterComponent />
                </div>
                <div className="card-list py-10 px-[16px] sm:px-[16px] md:w-full lg:w-[80%] lg:px-0">
                    {data.length > 0 ? (
                        data.map((country: Data, index: number) => (
                            <NavLink
                                to={`${country.name.common}`} // Added a "/" before the route
                                state={country}
                                key={index}
                                className="link"
                            >
                                <CardComponent data={country} />
                            </NavLink>
                        ))
                    ) : (
                        <LoadingComponent message="Country Not Found" />
                    )}
                </div>
            </section>
        </>
    );
};

export default AllCountryPage;
