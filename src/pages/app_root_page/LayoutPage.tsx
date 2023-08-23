import { Outlet } from "react-router-dom";

//theme data provider
import { useThemeProvider } from "../../context_data/useThemeProvider";
import MenuComponent from "../../components/menu_component/MenuComponent";

const LayoutPage = () => {
    //data context
    const theme = useThemeProvider();

    return (
        <main style={theme.theme} className="block">
            <MenuComponent />
            <div className="h-screen md:mt-20 ">
                <Outlet />
            </div>
        </main>
    );
};

export default LayoutPage;
