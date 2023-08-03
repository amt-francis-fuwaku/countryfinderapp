import { useContext } from "react";
import { DataProvider } from "./ThemeProvider";

export const useThemeProvider = () => {
    const themeData = useContext(DataProvider);
    if (!themeData) {
        throw new Error("No data found");
    }
    return themeData;
};
