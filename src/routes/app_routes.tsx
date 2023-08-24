import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import LayoutPage from "../pages/app_root_page/LayoutPage";
import CountryDetailsPage from "../pages/country_details_page/CountryDetailsPage";
import AllCountryPage from "../pages/all_countries_page/AllCountryPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LayoutPage />}>
            <Route index element={<AllCountryPage />} />
            <Route
                path=":country"
                element={<CountryDetailsPage />}
                errorElement={<CountryDetailsPage />}
            />
        </Route>
    )
);
