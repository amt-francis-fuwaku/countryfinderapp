import { Data } from "../../context_data/DataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

interface CardComponentProps {
    data: Data;
}

const CardComponent = ({ data }: CardComponentProps) => {
    const theme = useThemeProvider();
    return (
        <div
            className="ml-[56px] mr-[56px] rounded-md bg-white shadow-lg mb-[40px]"
            style={theme.theme}
        >
            <div className="">
                <img
                    src={data?.flags?.svg}
                    alt={data?.flags?.alt}
                    className="object-cover w-full h-full rounded-t-lg "
                />
            </div>
            <div className=" flex flex-col py-10 px-4">
                <p className="font-bold text-lg">{data.name.common}</p>
                <p>Population : {data.population.toLocaleString()}</p>
                <p>Region : {data.region} </p>
                <p>Capital : {data.capital ? data.capital : "no capital "} </p>
            </div>
        </div>
    );
};

export default CardComponent;
