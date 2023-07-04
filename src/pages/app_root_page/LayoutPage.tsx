import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";

//css classes
import FilterComponent from "../../components/select_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";

//theme data provider
import { useThemeProvider } from "../../context_data/useThemeProvider";

const LayoutPage = () => {
    //data context
    const theme = useThemeProvider();
    const countryData = useDataProvider();

    //get data from context
    const data = countryData?.data;

    if (!countryData) {
        return <div className="mt-48 font-extrabold mx-11">Loading....</div>;
    }

    return (
        <div className="flex flex-col gap-32" style={theme.theme}>
            <section className="my-28 font-nunito">
                <SearchBarComponent />
            </section>
            <section className="-my-32">
                <FilterComponent />
            </section>
            <main className="mt-20 px-12 content-center text-justify md:mx-20 lg:mx-28">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                    {data
                        ?.sort((a, b) =>
                            a.name.common.localeCompare(b.name.common)
                        )
                        .map((country: any, index: number) => (
                            <div key={index}>
                                <CardComponent data={country} />
                            </div>
                        ))}
                </div>
            </main>
        </div>
    );
};

export default LayoutPage;
