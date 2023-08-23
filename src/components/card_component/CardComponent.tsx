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
            className="card
"
        >
            <img
                src={data?.flags?.png}
                alt={data?.flags?.alt}
                className="card-image object-cover"
            />

            <div className="flex flex-col px-4 mt-[20px] md:px-4 ">
                <p className="font-extrabold  text-[14px]  md:text-[18px] ">
                    {data.name.common}
                </p>
                <div>
                    <p>
                        <span className="font-semibold text-[14px] :pr-2">
                            Population:
                        </span>
                        {data?.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold text-[14px]  pr-2">
                            {" "}
                            Region:
                        </span>
                        {data.region}
                    </p>
                    <p>
                        <span className="font-semibold text-[14px] pr-2">
                            Region Capital :
                        </span>
                        {data.capital ? data.capital : "no capital "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
