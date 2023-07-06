import { useDataProvider } from "../../context_data/useDataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const CountryDetailsPage = () => {
    const theme = useThemeProvider();
    const countryData = useDataProvider();
    const data = countryData?.data?.[15];

    return (
        <section className=" flex flex-col h-screen pt-10">
            <button
                className="flex flex-row justify-around  mt-[20%] ml-[10%] w-28 cursor-pointer shadow-lg text-white py-2 px-4 rounded"
                style={{ color: `${theme.theme.color}` }}
            >
                <div>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ color: `${theme.theme.color}` }}
                    />
                </div>
                <p>Back</p>
            </button>
            <div className="mx-[10%] pt-14">
                <figure>
                    <img
                        className="rounded-lg"
                        src={data.flags.svg}
                        alt="Description of the image"
                    />
                    <figcaption>
                        <p className="font-extrabold font-nunito">
                            {data.name.common}
                        </p>
                        <section>
                            <p>Native Name: {data.name.common}</p>
                            <p>{data.name.common}</p>
                        </section>
                        <section>
                            <p>Native Name: {data.name.common}</p>
                            <p>{data.name.common}</p>
                        </section>
                        <section>
                            <p className="font-extrabold">Border Countries</p>
                            <section>
                                <p>{data.name.common}</p>
                            </section>
                        </section>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default CountryDetailsPage;
