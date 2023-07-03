import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface DataProviderProps {
    children: ReactNode;
}

interface Data {
    [key: string]: any;
}

interface DataContextProps {
    data: Data | null;
}

export const DataContextProvider = createContext<DataContextProps | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<Data | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get<Data[]>(
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

    const contextData: DataContextProps = {
        data,
    };

    return (
        <DataContextProvider.Provider value={contextData}>
            {children}
        </DataContextProvider.Provider>
    );
};

export default DataProvider;
