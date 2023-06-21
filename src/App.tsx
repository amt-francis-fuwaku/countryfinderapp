import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app_routes";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
export default App;
