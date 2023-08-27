import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useThemeProvider } from "../../context_data/useThemeProvider";
import { NavLink, useLocation } from "react-router-dom";
import { useDataProvider } from "../../context_data/useDataProvider";
import { Data } from "../../context_data/DataProvider";
import { useEffect } from "react";
import LoadingComponent from "../../components/loading_component/LoadingComponent";

const CountryDetailsPage = () => {
    //solves the nested route issues
    const localSaved = window.localStorage.getItem("country");
    let savedObj = null;
    if (localSaved !== null) {
        try {
            savedObj = JSON.parse(localSaved);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
    const localSavedBorder = window.localStorage.getItem("border");
    let savedBorder = null;
    if (localSavedBorder !== null) {
        try {
            savedBorder = JSON.parse(localSavedBorder);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
    //end route issues

    //provides data for the page
    const theme = useThemeProvider();
    const country = useLocation();

    const countryData = useDataProvider();

    const data: Data = country?.state || savedObj;
    const borderData = countryData?.data || savedBorder;

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
        window.localStorage.setItem("country", JSON.stringify(data));
        window.localStorage.setItem("border", JSON.stringify(borderCountries));
    });
    useEffect(() => {
        countryData.fetchData();
    }, []);

    return data === null ? (
        <div className="w-screen h-screen mt-20">
            <LoadingComponent message="no data found" />
        </div>
    ) : (
        <section
            className="grid grid-rows-1 px-[16px] pt-[60px] m-auto md:pt-0 lg:grid-cols-2 lg:w-[80%] lg:px-0 lg:gap-28"
            style={theme.theme}
        >
            {/** country flag and back button */}
            <div className=" px-0 rounded-md mt-10 lg:flex flex-col">
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
                    className=" rounded-md mt-10 w-auto sm:h-[467px] md:h-[467px] lg:h-[467px] lg:mt-10"
                    src={data && data.flags ? data.flags.svg : "no data found"}
                    alt={` this is the flag of ${data.name.common}`}
                />
            </div>

            {/** country details  */}
            <section className=" mt-2 sm:pt-10 sm:gap-y-3 md:pt-0 lg:place-self-center md:w-full lg:w-fit lg:mt-32">
                <div>
                    <p className="font-bold md:text-[22px] 2xl:text-[32px]">
                        {data && data.name ? data.name.common : "nodata found"}
                    </p>
                    <div className=" flex flex-col sm:flex-row sm:gap-x-10 sm:justify-between md:gap-x-5 md:justify-between text-[14px] lg:gap-x-[5%] ">
                        {/**basic country information */}
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
                            <div className="flex gap-3 py-1">
                                <p className="font-semibold ">Capital:</p>
                                <p className="font-thin ">
                                    {data.capital
                                        ? data.capital
                                        : "no data found"}
                                </p>
                            </div>
                        </section>
                        {/*top level*/}
                        <section className="mt-6 md:w-[250px] lg:w-full">
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
                            {/**languages */}
                            <div className=" flex flex-wrap shrink-0 lg:w-full mt-[10px] text-justify">
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
                </div>
                {/**border */}
                <section className="flex mb-[5%] mt-4 flex-row flex-wrap gap-3 md:flex-row  md:mt-10 lg:flex-row lg:place">
                    <p className="font-bold text-[14px] ">Border Countries:</p>
                    <section className=" text-[12px] grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 md:h-full  lg:grid-cols-4 lg:w-fit lg:gap-2 ">
                        {data && borders.length > 0 ? (
                            borderCountries.map(
                                (borderCountries: Data, index: number) => (
                                    <NavLink
                                        to={{ pathname: "" }}
                                        state={borderCountries}
                                        key={index}
                                        className="h-fit w-full py-2 px-0 text-center shadow-md rounded-sm md:w-[100px] lg:w-full "
                                        style={{
                                            color: `${theme.theme.color}`,
                                        }}
                                    >
                                        <p className=" text-center  lg:px-5">
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
            </section>
        </section>
    );
};

export default CountryDetailsPage;
