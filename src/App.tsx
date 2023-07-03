import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app_routes";
import ThemeProvider from "./context_data/ThemeProvider";
import MenuComponent from "./components/menu_component/MenuComponent";
import DataProvider from "./context_data/DataProvider";

function App() {
    return (
        <DataProvider>
            <ThemeProvider>
                <MenuComponent />
                <RouterProvider router={router} />
            </ThemeProvider>
        </DataProvider>
    );
}
export default App;
