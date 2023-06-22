import MenuComponent from "../../components/menu_component/MenuComponent";
import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/select_region_component/FilterComponent";

const LayoutPage = () => {
    return (
        <div className="flex flex-col gap-28">
            <header>
                <MenuComponent />
            </header>
            <section>
                <SearchBarComponent />
            </section>
            <section>
                <FilterComponent />
            </section>
            <main> IM MAIN PAGE</main>
        </div>
    );
};

export default LayoutPage;
