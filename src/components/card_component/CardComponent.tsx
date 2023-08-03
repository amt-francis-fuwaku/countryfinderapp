import { useThemeProvider } from "../../context_data/useThemeProvider";
import { cardStyle } from "./cardstyle";

interface CardComponentProps {
    data: any;
}

const CardComponent = ({ data }: CardComponentProps) => {
    const theme = useThemeProvider();
    // console.log("🚀countryData:", data.capital, data.name.common);
    return (
        <div className={cardStyle} style={theme.theme}>
            <div className="h-40">
                <img
                    src={data?.flags?.svg}
                    alt={data?.flags?.alt}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className=" flex flex-col py-8 px-4">
                <p className="font-bold text-lg">{data.name.common}</p>
                <p>Population : {data.population.toLocaleString()}</p>
                <p>Region : {data.region} </p>
                <p>Capital : {data.capital ? data.capital : "no capital "} </p>
            </div>
        </div>
    );
};

export default CardComponent;
