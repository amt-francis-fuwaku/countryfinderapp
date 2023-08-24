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
    console.log("🚀 main API call countryData:", countryData.data);

    const data: Data = country?.state;
    console.log("🚀 USE LOCATION countryData:", data);
    const borderData = countryData ? countryData?.data : [];

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

    return !data ? (
        <section className=" mx-[16px] flex flex-row items-center py-20 sm:justify-center md:justify-center">
            <p className="pr-[20px]">loading</p>
            <div className="relative h-[20px] w-[20px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[20px] w-[20px]  bg-red-300"></span>
            </div>
            <div className="relative flex h-[20px] w-[20px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[20px] w-[20px]  bg-red-400"></span>
            </div>
            <div className="relative flex h-[30px] w-[30px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[30px] w-[30px]  bg-red-500"></span>
            </div>
            <div className="relative flex h-[40px] w-[40px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[40px] w-[40px]  bg-red-600"></span>
            </div>
            <div className="relative flex h-[50px] w-[50px] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[50px] w-[50px]  bg-red-700"></span>
            </div>
        </section>
    ) : (
        <section className=" flex flex-col h-screen mx-[16px] pt-20 sm:flex-col sm:pt-20  md:pt-0 lg:pt-0 lg:gap-x-20 lg:h-fit lg:flex-row lg:items-center lg:w-[80%] lg:m-auto">
            <div className=" rounded-md mt-10 lg:flex flex-col">
                <NavLink
                    to="/"
                    className="flex flex-row justify-around w-[104px] h-[42px] cursor-pointer shadow-md rounded"
                    style={{ color: `${theme.theme.color}` }}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ color: `${theme.theme.color}` }}
                        className="self-center cursor-pointer"
                    />

                    <p className="self-center cursor-pointer ">Back</p>
                </NavLink>
                <img
                    className=" rounded-md mt-10 w-full lg:mt-10 lg:h-[400px]"
                    src={data && data.flags ? data.flags.svg : "no data found"}
                    alt={` this is the flag of ${data.name.common}`}
                />
            </div>
            <section className="mt-10 sm:pt-10 sm:gap-y-3 sm:mt-0 lg:mt-32 ">
                <div className=" md:w-[598px] md:h-[323px]  ">
                    <p className="font-bold md:text-[22px] 2xl:text-[32px]">
                        {data && data.name ? data.name.common : "nodata found"}
                    </p>
                    <div className="md:flex md:gap-[10%] text-[14px]  ">
                        <section className="mt-4">
                            <div className="flex gap-3 py-1 ">
                                <p className="font-semibold ">Native Name:</p>
                                <p className="font-thin ]">
                                    {data && data.name
                                        ? data.name.common
                                        : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3 py-1">
                                <p className="font-semibold  ">Population:</p>
                                <p className="font-thin ">
                                    {data && data.population
                                        ? data.population.toLocaleString()
                                        : "no data found"}
                                </p>
                            </div>
                            <div className="flex gap-3 py-1">
                                <p className="font-semibold ">Region:</p>
                                <p className="font-thin ">
                                    {data && data.region
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
                    <section className="flex mb-[5%] mt-4 flex-col flex-wrap md:flex-row gap-3">
                        <p className="font-bold text-[14px] ">
                            Border Countries:
                        </p>
                        <section className=" text-[12px] grid grid-cols-3 md:grid-cols-3  lg:grid-cols-3 lg:w-fit lg:gap-2  ">
                            {data && borders.length > 0 ? (
                                borderCountries.map(
                                    (borderCountries: Data, index: number) => (
                                        <NavLink
                                            to={{ pathname: "" }}
                                            state={borderCountries}
                                            key={index}
                                            className="h-fit w-full py-2 px-0 text-center shadow-md rounded-sm md:w-[100px] "
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
        </section>
    );
};

export default CountryDetailsPage;
