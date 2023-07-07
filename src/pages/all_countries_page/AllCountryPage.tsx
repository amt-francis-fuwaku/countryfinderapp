import { Link } from "react-router-dom";
import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/select_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";

const AllCountryPage = () => {
    const countryData = useDataProvider();

    //get data from context
    const data = countryData?.data;

    return (
        <section className="py-56 lg:pb-[25%] ">
            <SearchBarComponent />
            <FilterComponent />
            <div className="ml-[12%] mt-[15%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:mt-10 lg:ml-[8%] ">
                {data?.map((country: any, index: number) => (
                    <Link
                        to={{ pathname: "/details" }}
                        state={country}
                        key={index}
                    >
                        <CardComponent data={country} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AllCountryPage;
