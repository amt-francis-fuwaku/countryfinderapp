import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app_routes";

function App() {
    return (
        <div className="font-nunito">
            <RouterProvider router={router} />
        </div>
    );
}
export default App;
