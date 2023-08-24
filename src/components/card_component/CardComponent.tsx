import { Data } from "../../context_data/DataProvider";
import { useThemeProvider } from "../../context_data/useThemeProvider";

interface CardComponentProps {
    data: Data;
}

const CardComponent = ({ data }: CardComponentProps) => {
    const theme = useThemeProvider();
    return (
        <div style={theme.theme} className="card">
            <img
                src={data?.flags?.png}
                alt={data?.flags?.alt}
                className="card-image "
            />

            <div className="flex flex-col px-6 mt-[20px] ">
                <p className="font-extrabold  text-[18px] lg:line-clamp-1">
                    {data.name.common}
                </p>
                <div className="text-[14px] mt-[5px]  ">
                    <p>
                        <span className="font-semibold pr-2">Population:</span>
                        {data?.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold   pr-2"> Region:</span>
                        {data.region}
                    </p>

                    <div className="flex">
                        <p className="font-semibold pr-2">Capital:</p>
                        <p className="md:line-clamp-1">
                            {data.capital ? data.capital : "no capital "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
