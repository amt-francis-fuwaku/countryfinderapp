import CardComponent from "../../components/card_component/CardComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";

//css classes
import FilterComponent from "../../components/select_region_component/FilterComponent";
import { useDataProvider } from "../../context_data/useDataProvider";

//theme data provider
import { useThemeProvider } from "../../context_data/useThemeProvider";

const LayoutPage = () => {
    const theme = useThemeProvider();
    const countryData = useDataProvider();
    const { data } = countryData;
    console.log("🚀 ~ file: LayoutPage.tsx:15 ~ LayoutPage ~ data:", data);

    if (!data) {
        return <p style={theme.theme}>Loading.......</p>;
    }

    return (
        <div className="flex flex-col gap-32" style={theme.theme}>
            <section className="my-28 font-nunito">
                <SearchBarComponent />
            </section>
            <section className="-my-32">
                <FilterComponent />
            </section>
            <main className="mt-20 px-16 content-center text-justify"></main>
        </div>
    );
};

export default LayoutPage;
