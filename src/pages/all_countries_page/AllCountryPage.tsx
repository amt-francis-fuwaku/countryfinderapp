import { NavLink } from "react-router-dom";
import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/filter_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { Data } from "../../context_data/DataProvider";

const AllCountryPage = () => {
    const countryData = useDataProvider();
    const theme = useThemeProvider();

    //get data from context
    const data = countryData?.data;

    //shows loading animation when data is loading

    return !data ? (
        <section className=" mx-[16px] flex flex-row items-center py-40 sm:justify-center md:justify-center">
            <p className="pr-[20px]">loading</p>
            <div className="relative h-[20px] w-[20px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[20px] w-[20px]  bg-red-300"></span>
            </div>
            <div className="relative flex h-[20px] w-[20px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[20px] w-[20px]  bg-red-400"></span>
            </div>
            <div className="relative flex h-[30px] w-[30px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[30px] w-[30px]  bg-red-500"></span>
            </div>
            <div className="relative flex h-[40px] w-[40px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[40px] w-[40px]  bg-red-600"></span>
            </div>
            <div className="relative flex h-[50px] w-[50px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[50px] w-[50px]  bg-red-700"></span>
            </div>
        </section>
    ) : (
        <>
            <section style={theme.theme} className="flex flex-col ">
                <div className=" flex flex-col  px-[16px] pt-[30%] sm:pt-[20%] sm:flex sm:flex-row sm:justify-between sm:items-center  md:pt-10 md:m-0 md:w-full  md:flex  lg:flex md:justify-between lg:w-[1180px] lg:m-auto lg:py-10 lg:px-0">
                    <SearchBarComponent />
                    <FilterComponent />
                </div>
                <div className="card-list py-10  px-[16px] sm:px-[16px]  md:px-[5%] md:w-full lg:w-[1180px] lg:px-0">
                    {data.length > 0 ? (
                        data.map((country: Data, index: number) => (
                            <NavLink
                                to={`/${country.name.common}`} // Added a "/" before the route
                                state={country}
                                key={index}
                                className="link"
                            >
                                <CardComponent data={country} />
                            </NavLink>
                        ))
                    ) : (
                        <section className="flex flex-row  items-center justify-between">
                            <p className="pr-[20px]">no country found</p>
                            <div className="relative flex h-5 w-5 ">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-5 w-5  bg-red-500"></span>
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </>
    );
};

export default AllCountryPage;
