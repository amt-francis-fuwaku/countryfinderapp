import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import LayoutPage from "../pages/app_root_page/LayoutPage";

export const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<LayoutPage />}></Route>)
);
