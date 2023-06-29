import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app_routes";
import ThemeProvider from "./context_data/ThemeProvider";
import MenuComponent from "./components/menu_component/MenuComponent";

function App() {
    return (
        <ThemeProvider>
            <MenuComponent />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
export default App;
