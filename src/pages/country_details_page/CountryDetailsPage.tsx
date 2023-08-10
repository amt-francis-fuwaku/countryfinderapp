import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { NavLink, useLocation } from "react-router-dom";
import { useDataProvider } from "../../context_data/useDataProvider";
import { Data } from "../../context_data/DataProvider";
import { useEffect } from "react";

const CountryDetailsPage = () => {
    //provides data for the page
    const theme = useThemeProvider();
    //use location to send data here for details
    const country = useLocation();
    const data = country?.state;
    console.log("🚀 ~ file: data:", data);
    const countryData = useDataProvider();
    const borderData = countryData.data;

    //obstruct the string code for the currency
    const currencyCode = Object.keys(data?.currencies)[0];

    const languageCode = Object.keys(data?.languages);

    console.log("🚀languageCode:", languageCode);

    // get the cca3 the border countries
    const borders: string[] = data.borders
        ? data.borders.map((border: string) => {
              return border;
          })
        : [];

    //get the names of the bordered countries
    const borderCountries = borderData?.filter((country: Data) => {
        for (let index = 0; index < borders.length; index++) {
            if (country.cca3.includes(borders[index])) {
                return true; // Return true if the country is in the borders list
            }
        }
    });

    useEffect(() => {
        countryData.fetchData();
        return () => {};
    }, []);

    return (
        <section className="mx-[5%] pt-14  mt-9 md:mt-20  lg:h-screen lg:py-[10%] lg:mx-[6%]">
            <div className="md:-mt-14">
                <NavLink to="/">
                    <button
                        className="flex flex-row  justify-around my-5 ml-[2%] w-28 cursor-pointer shadow-lg py-2 px-4 rounded md:fixed md:top-[25%] lg:-mt-20"
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
                        className="rounded-lg  md:w-[50%] md:h-[50%] lg:w-[559px] lg:h-[483px]"
                        src={data.flags.svg ? data.flags.svg : "no data found"}
                        alt={` this is the flag of ${data.name.common}`}
                    />
                    <figcaption className="mt-10 md:h-[50%] md:-mt-10 lg:mt-14 lg:ml-32 ">
                        <p className="font-bold text-2xl">
                            {data.name.common
                                ? data.name.common
                                : "nodata found"}
                        </p>
                        <div className="lg:flex lg:gap-64">
                            <section className="mt-4 ">
                                <div className="flex gap-3  py-1 ">
                                    <p className="font-semibold">
                                        Native Name:
                                    </p>
                                    <p className="font-thin">
                                        {data.name.common
                                            ? data.name.common
                                            : "no data found"}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Population:</p>
                                    <p className="font-thin">
                                        {data.population
                                            ? data.population.toLocaleString()
                                            : "no data found"}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Region:</p>
                                    <p className="font-thin">
                                        {data.region
                                            ? data.region
                                            : "no data found"}
                                    </p>
                                </div>
                                <div className="flex gap-3 py-1 ">
                                    <p className="font-semibold">Sub Region:</p>
                                    <p className="font-thin">
                                        {data.subregion
                                            ? data.subregion
                                            : "no data found"}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Capital:</p>
                                    <p className="font-thin">
                                        {data.capital
                                            ? data.capital
                                            : "no data found"}
                                    </p>
                                </div>
                            </section>
                            <section className="mt-6">
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">
                                        Top Level Domain:
                                    </p>
                                    <p className="font-thin">
                                        {data.tld ? data.tld : "no data found"}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Currencies:</p>
                                    <p className="font-thin">
                                        {data && data?.currencies
                                            ? data?.currencies[currencyCode]
                                                  .name
                                            : "no data found"}
                                    </p>
                                </div>
                                <div className="flex gap-3  py-1">
                                    <p className="font-semibold">Languages</p>

                                    {data && languageCode
                                        ? languageCode.map(
                                              (
                                                  language: any,
                                                  index: number
                                              ) => (
                                                  <p key={index}>
                                                      {`${data.languages[language]},`}
                                                  </p>
                                              )
                                          )
                                        : "no language found"}
                                </div>
                            </section>
                        </div>
                        <section className="mt-10 lg:mt-20 ">
                            <p className="font-extrabold ">Border Countries:</p>
                            <section className=" grid grid-cols-3 mt-6 pb-10 lg:-mt-10 lg:ml-40 lg:gap-x-4 ">
                                {borders.length > 0 ? (
                                    borderCountries.map(
                                        (
                                            borderCountries: Data,
                                            index: number
                                        ) => (
                                            <NavLink
                                                to={{ pathname: "" }}
                                                state={borderCountries}
                                                key={index}
                                                className="mt-[5%] w-ful shadow-lg p-4 rounded   lg:p-3 lg:h-fit lg:w-[190px]"
                                                style={{
                                                    color: `${theme.theme.color}`,
                                                }}
                                            >
                                                {borderCountries.name.common}
                                            </NavLink>
                                        )
                                    )
                                ) : (
                                    <p className="text-lg lg:w-60 lg:mt-4">
                                        No border Country Found
                                    </p>
                                )}
                            </section>
                        </section>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default CountryDetailsPage;
