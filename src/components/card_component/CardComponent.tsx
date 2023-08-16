import { Data } from "../../context_data/DataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

interface CardComponentProps {
    data: Data;
}

const CardComponent = ({ data }: CardComponentProps) => {
    const theme = useThemeProvider();
    return (
        <div
            className="mb-10 h-[336px] w-[264px] rounded-md bg-white shadow-lg"
            style={theme.theme}
        >
            <img
                src={data?.flags?.svg}
                alt={data?.flags?.alt}
                className="object-cover w-[full] h-[full] rounded-t-lg "
            />

            <div className=" flex flex-col mt-[24px] px-4 md:w-[267px] md:h-[160px]">
                <p className="font-bold text-[18px]">{data.name.common}</p>
                <p>
                    <span className="font-bold">Population </span>:{" "}
                    {data.population.toLocaleString()}
                </p>
                <p>
                    {" "}
                    <span className="font-bold"> Region</span> : {data.region}{" "}
                </p>
                <p>
                    <span className="font-bold"> RegionCapital</span> :{" "}
                    {data.capital ? data.capital : "no capital "}{" "}
                </p>
            </div>
        </div>
    );
};

export default CardComponent;
