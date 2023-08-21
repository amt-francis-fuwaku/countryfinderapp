import { Outlet } from "react-router-dom";

//theme data provider
import { useThemeProvider } from "../../context_data/useThemeProvider";
import MenuComponent from "../../components/menu_component/MenuComponent";

const LayoutPage = () => {
    //data context
    const theme = useThemeProvider();

    return (
        <main
            className="h-screen overflow-x-hidden overflow-y-scroll"
            style={theme.theme}
        >
            <div>
                <MenuComponent />
            </div>
            <div className="mt-32">
                <Outlet />
            </div>
        </main>
    );
};

export default LayoutPage;
