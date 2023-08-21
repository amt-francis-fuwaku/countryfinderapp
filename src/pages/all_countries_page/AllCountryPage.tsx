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
    if (!data) {
        return (
            <div className="animate-pulse flex flex-col my-60 mx-20  w-[264px] h-[336px]">
                <div className="rounded-t-md bg-slate-700 w-[264px] h-[336px]"></div>
                <div className="flex-1 space-y-10 py-6">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-10">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                </div>
                <p>loading...</p>
            </div>
        );
    }

    return (
        <section style={theme.theme} className="flex flex-col md:mx-[80px]">
            <div className="flex flex-col mx-[16px] md:mx-0 mb-10 md:flex-row md:justify-between ">
                <SearchBarComponent />
                <FilterComponent />
            </div>

            <div className="grid grid-cols-1-col place-content-center gap-y-[40px] overflow-hidden md:grid md:place-items-start md:grid-cols-4 md:gap-x-[40px] lg:gap-x-[75px]">
                {data.length > 0 ? (
                    data.map((country: Data, index: number) => (
                        <NavLink
                            to={`${country.name.common}`}
                            state={country}
                            key={index}
                            className="w-[264px] lg:w-[390px] lg:h-[420px]  "
                        >
                            <CardComponent data={country} />
                        </NavLink>
                    ))
                ) : (
                    <div className="animate-pulse flex flex-col w-[264px] h-[336px]">
                        <div className="rounded-t-md bg-slate-700 w-[264px] h-[336px]"></div>
                        <div className="flex-1 space-y-10 py-6">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                        <p>no country found...</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllCountryPage;
