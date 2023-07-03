import { useThemeProvider } from "../../context_data/useThemeProvider";

interface CardComponentProps {
    data: unknown;
}

const CardComponent = ({ data }: CardComponentProps) => {
    const theme = useThemeProvider();
    return (
        <div
            className=" flex flex-col h-[336px] w-[264px] bg-slate-300 rounded-lg shadow-lg mb-12"
            style={theme.theme}
        >
            <div className="h-[160px] bg-slate-600">
                <img src={""} alt={""} />
            </div>
            <div className=" flex flex-col py-8 px-4">
                <p className="font-bold text-lg">{}</p>
                <p>Population : {}</p>
                <p>Region : {} </p>
                <p>Capital : {} </p>
            </div>
        </div>
    );
};

export default CardComponent;
