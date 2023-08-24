import { Outlet } from "react-router-dom";

//theme data provider
import { useThemeProvider } from "../../context_data/useThemeProvider";
import MenuComponent from "../../components/menu_component/MenuComponent";

const LayoutPage = () => {
    //data context
    const theme = useThemeProvider();

    return (
        <main
            style={theme.theme}
            className="h-full sm:h-full lg:h-full md:h-full "
        >
            <MenuComponent />
            <div className="h-fit sm:h-full lg:h-screen md:h-screen md:mt-20 lg:md:mt-20 ">
                <Outlet />
            </div>
        </main>
    );
};

export default LayoutPage;
