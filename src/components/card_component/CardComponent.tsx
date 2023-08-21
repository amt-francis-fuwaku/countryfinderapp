import { Data } from "../../context_data/DataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

interface CardComponentProps {
    data: Data;
}

const CardComponent = ({ data }: CardComponentProps) => {
    const theme = useThemeProvider();
    return (
        <div
            style={theme.theme}
            className=" flex flex-col shadow-lg  w-[264px] h-[336px] mb-3 lg:w-[380px] lg:h-[420px] "
        >
            <img
                src={data?.flags?.png}
                alt={data?.flags?.alt}
                className="rounded-t-lg h-[160px] md:h-[160px] lg:h-[230px]"
            />

            <div className="flex flex-col mt-[35px] px-8 text-[14px] ">
                <p className="font-bold md:text-[18px] ">{data.name.common}</p>
                <div>
                    <p>
                        <span className="font-bold">Population </span>:
                        {data?.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-bold"> Region</span> :
                        {data.region}{" "}
                    </p>
                    <p>
                        <span className="font-bold"> RegionCapital</span> :
                        {data.capital ? data.capital : "no capital "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
