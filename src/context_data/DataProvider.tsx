import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});
interface DataProviderProps {
    children: ReactNode;
}

export interface Data {
    [key: string]: any;
}

interface DataContextProps {
    data: Data | null;
    setData: React.Dispatch<React.SetStateAction<Data | null>>;
    fetchData: () => Promise<void>;
}

export const DataContextProvider = createContext<DataContextProps | null>(null);

const DataProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<Data | null>(null);

    const fetchData = async () => {
        try {
            const response = await instance.get<Data[]>(`/all`);
            setData(response.data);
        } catch (error) {
            throw Error("No Data Found");
        }
    };

    const contextData: DataContextProps = {
        data,
        setData,
        fetchData,
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContextProvider.Provider value={contextData}>
            {children}
        </DataContextProvider.Provider>
    );
};

export default DataProvider;
