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
    const country = useLocation();

    const countryData = useDataProvider();

    const data = country?.state;
    const borderData = countryData.data;

    //obstruct the object keys
    const currencyCode = data?.currencies
        ? Object.keys(data?.currencies)[0]
        : "";
    const languageCode = data?.languages ? Object.keys(data?.languages) : [];

    // get the cca3 the border countries
    const borders: string[] = data.borders
        ? data.borders.map((border: string) => {
              return border;
          })
        : [];

    //get the names of the bordered countries
    const borderCountries: Data[] = borderData?.filter((country: Data) => {
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
        <div className="flex flex-col lg:flex-row">
            <section className=" flex  flex-col mx-[20px] md:mx-0 md:flex-col md:w-fit  md:h-fit  ">
                <NavLink
                    to="/"
                    className="flex flex-row shrink-0  justify-around w-[104px] h-[42px] cursor-pointer shadow-md  rounded md:ml-[80px] md:mt-[80px] "
                    style={{ color: `${theme.theme.color}` }}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ color: `${theme.theme.color}` }}
                        className="self-center cursor-pointer"
                    />

                    <p className="self-center cursor-pointer ">Back</p>
                </NavLink>

                <div className=" mt-[50px] md:ml-[80px] md:mt-[100px] 2xl:w-[700px] 2xl:h-[483px] ">
                    <img
                        className="rounded-md w-full h-full "
                        src={data.flags.png ? data.flags.png : "no data found"}
                        alt={` this is the flag of ${data.name.common}`}
                    />
                </div>
            </section>

            <section className="flex flex-col flex-shrink-0 mx-[28px] text-[14px] md:mx-[80px] md:h-fit md:w-fit  lg:mt-[260px] md:text-[16px] 2xl:ml-[144px]">
                <div className="mt-10 md:w-[598px] md:h-[323px]  ">
                    <p className="font-bold text-[22px] md:text-[32px]">
                        {data.name.common ? data.name.common : "nodata found"}
                    </p>
                    <div className="md:flex  md:gap-[50px] text-[14px]  ">
                        <section className="mt-4 ">
                            <div className="flex gap-3 py-1 ">
                                <p className="font-semibold ">Native Name:</p>
                                <p className="font-thin ]">
                                    {data.name.common
                                        ? data.name.common
                                        : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3 py-1">
                                <p className="font-semibold  ">Population:</p>
                                <p className="font-thin ">
                                    {data.population
                                        ? data.population.toLocaleString()
                                        : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3 py-1">
                                <p className="font-semibold ">Region:</p>
                                <p className="font-thin ">
                                    {data.region
                                        ? data.region
                                        : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3 py-1 ">
                                <p className="font-semibold ">Sub Region:</p>
                                <p className="font-thin ">
                                    {data.subregion
                                        ? data.subregion
                                        : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3  py-1">
                                <p className="font-semibold ">Capital:</p>
                                <p className="font-thin ">
                                    {data.capital
                                        ? data.capital
                                        : "no data found"}
                                </p>
                            </div>
                        </section>
                        {/*top level*/}
                        <section className="mt-6 md:w-[250px]">
                            <div className="flex py-1">
                                <p className="font-semibold ">
                                    Top Level Domain:
                                </p>
                                <p className="font-thin ">
                                    {data.tld ? data.tld : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3  py-1">
                                <p className="font-semibold ">Currencies:</p>
                                <p className="font-thin ">
                                    {data && data?.currencies
                                        ? data?.currencies[currencyCode].name
                                        : "no data found"}
                                </p>
                            </div>
                            <div className=" flex flex-wrap shrink-0  mt-[10px] text-justify">
                                <p className="font-bold text-[14px] mr-[10px]">
                                    Languages:
                                </p>

                                {data && languageCode
                                    ? languageCode.map(
                                          (language: any, index: number) => (
                                              <p key={index} className="w-fit ">
                                                  {`${data.languages[language]},`}
                                              </p>
                                          )
                                      )
                                    : "no language found"}
                            </div>
                        </section>
                    </div>
                    <section className="mt-[34px] md:mt-[40px]  ">
                        <p className="font-bold text-[14px] ">
                            Border Countries:
                        </p>
                        <section className=" flex flex-wrap shrink-0 place-content-center mt-[16px] gap-2 mb-5 md:-mt-6 md:ml-40 md:w-fit">
                            {borders.length > 0 ? (
                                borderCountries.map(
                                    (borderCountries: Data, index: number) => (
                                        <NavLink
                                            to={{ pathname: "" }}
                                            state={borderCountries}
                                            key={index}
                                            className="h-fit w-[96px] py-[6px] text-center shadow-md rounded-sm  md:w-[136px] md:h-[40px] "
                                            style={{
                                                color: `${theme.theme.color}`,
                                            }}
                                        >
                                            <p className=" text-center ">
                                                {borderCountries.name.common}
                                            </p>
                                        </NavLink>
                                    )
                                )
                            ) : (
                                <p className="text-[12px] md:mt-[5px]">
                                    No border Country Found
                                </p>
                            )}
                        </section>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default CountryDetailsPage;
