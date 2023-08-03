import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { NavLink, useLocation } from "react-router-dom";

const CountryDetailsPage = () => {
    const theme = useThemeProvider();
    const country = useLocation();
    const data = country?.state;

    return (
        <section className="mx-[10%] pt-14  mt-9 md:mt-20  lg:h-screen lg:py-[10%]">
            <div className="md:-mt-14  ">
                <NavLink to="/">
                    <button
                        className="flex flex-row  justify-around my-5 ml-[1%] w-28 cursor-pointer shadow-lg py-2 px-4 rounded md:fixed md:top-[25%] lg:-mt-20"
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
                </NavLink>
                <figure className=" md:h-[100%] lg:flex lg:gap-32 lg:my-20 lg:p-10">
                    <img
                        className="rounded-lg  md:w-[50%] md:h-[50%]"
                        src={data.flags.svg}
                        alt="Description of the image"
                    />
                    <figcaption className="mt-10 md:h-[50%] md:-mt-10 ">
                        <p className="font-bold text-2xl">{data.name.common}</p>
                        <div className="lg:flex lg:gap-32">
                            <section className="mt-4 ">
                                <div className="flex gap-3  py-1 ">
                                    <p className="font-semibold">
                                        Native Name:
                                    </p>
                                    <p className="font-thin">
                                        {data.name.common}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Population:</p>
                                    <p className="font-thin">
                                        {data.population.toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Region:</p>
                                    <p className="font-thin">{data.region}</p>
                                </div>
                                <div className="flex gap-3 py-1 ">
                                    <p className="font-semibold">Sub Region:</p>
                                    <p className="font-thin">
                                        {data.subregion}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Capital:</p>
                                    <p className="font-thin">{data.capital}</p>
                                </div>
                            </section>
                            <section className="mt-6">
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">
                                        Top Level Domain:
                                    </p>
                                    <p className="font-thin">{data.tld}</p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Currencies:</p>
                                    <p className="font-thin">
                                        {data.currencies.names}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Languages:</p>
                                    <p>{data.languages.names}</p>
                                </div>
                            </section>
                        </div>
                        <section className="grid mt-10  ">
                            <p className="font-extrabold ">Border Countries</p>
                        </section>
                        <section className=" grid grid-cols-3 mt-6 pb-10">
                            {data && data.borders?.length > 0 ? (
                                data.borders.map(
                                    (borderCountries: any, index: number) => (
                                        <button
                                            key={index}
                                            className="mt-[5%] w-20 cursor-pointer shadow-lg py-2 rounded lg:w-32 lg:py-4"
                                            style={{
                                                color: `${theme.theme.color}`,
                                            }}
                                        >
                                            <p>{borderCountries}</p>
                                        </button>
                                    )
                                )
                            ) : (
                                <p>No data available.</p>
                            )}
                        </section>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default CountryDetailsPage;
