import { useContext } from "react";
import { DataContextProvider } from "./DataProvider";

export const useDataProvider = () => {
    const countries = useContext(DataContextProvider);
    if (!countries?.data) {
        throw new Error("Data Not Found");
    }
    return countries.data;
};
