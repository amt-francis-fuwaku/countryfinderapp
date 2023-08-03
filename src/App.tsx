import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app_routes";

import MenuComponent from "./components/menu_component/MenuComponent";

function App() {
    return (
        <div>
            <MenuComponent />
            <RouterProvider router={router} />
        </div>
    );
}
export default App;
