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
            className=" flex flex-col shadow-lg rounded-t-lg w-[264px] h-[336px] mb-3 md:w-[280px]  lg:w-[290px] 2xl:w-[380px] lg:h-[420px]
 "
        >
            <img
                src={data?.flags?.png}
                alt={data?.flags?.alt}
                className="rounded-t-lg h-[160px] md:h-[160px] md:w-[280px] lg:h-[200px] lg:w-[290px] 2xl:w-[380px]"
            />

            <div className="flex flex-col px-4 mt-[35px] md:px-4  ">
                <p className="font-extrabold text-[14px]  md:text-[18px] ">
                    {data.name.common}
                </p>
                <div>
                    <p>
                        <span className="font-semibold text-[14px]">
                            Population{" "}
                        </span>
                        :{data?.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold text-[14px]">
                            {" "}
                            Region
                        </span>{" "}
                        :{data.region}{" "}
                    </p>
                    <p>
                        <span className="font-semibold text-[14px]">
                            {" "}
                            RegionCapital
                        </span>{" "}
                        :{data.capital ? data.capital : "no capital "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
