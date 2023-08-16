import { Outlet } from "react-router-dom";

//css classes

import { useDataProvider } from "../../context_data/useDataProvider";

//theme data provider
import { useThemeProvider } from "../../context_data/useThemeProvider";
import MenuComponent from "../../components/menu_component/MenuComponent";

const LayoutPage = () => {
    //data context
    const theme = useThemeProvider();
    const countryData = useDataProvider();

    //get data from context
    const data = countryData?.data;

    if (!data) {
        return (
            <div
                className="mt-20 font-extrabold min-h-screen p-36 "
                style={theme.theme}
            >
                <div className="mt-20 lg:mx-[750px]">
                    <div className="animate-ping rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-100 lg:h-32 lg:w-32  lg:border-t-8 lg:border-b-8"></div>
                    <p className="-mt-10 lg:-mt-20 lg:ml-6">Loading</p>
                </div>
            </div>
        );
    }

    return (
        <main style={theme.theme} className="flex flex-col">
            <div>
                <MenuComponent />
            </div>
            <div className="mt-[80px] md:mt-[80px] clear-both">
                <Outlet />
            </div>
        </main>
    );
};

export default LayoutPage;
