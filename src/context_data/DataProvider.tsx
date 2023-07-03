import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface DataProviderProps {
    children: ReactNode;
}

interface Data {
    [key: string]: string;
}

interface DataContextProps {
    data: Data | null;
    fetchData: (input: string) => void;
}

export const DataContextProvider = createContext<DataContextProps | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<Data | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            setData(response.data);
        } catch (error) {
            throw new Error("No Data Found");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const contextData = {
        data,
        fetchData,
    };
    return (
        <DataContextProvider.Provider value={contextData}>
            {children}
        </DataContextProvider.Provider>
    );
};

export default DataProvider;
