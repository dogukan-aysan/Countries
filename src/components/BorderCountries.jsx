import { useContext } from "react";
import useCountriesWithCode from "../hooks/useCountriesWithCode";
import Button from "./Button";
import { CountryContext } from "../context/CountryContext";
import Spinner from "./Spinner";

function BorderCountries({ country }) {
  const { dispatch } = useContext(CountryContext);
  const bordersString = country.borders?.join(",");
  const { data, isLoading, isError } = useCountriesWithCode(bordersString);
  const handleBorderCountryClick = (clickedCountry) => {
    dispatch({ type: "country/selected", payload: clickedCountry });
  };
  if (isLoading) return <Spinner />;
  if (isError) return <div>ERROR</div>;
  return (
    <div className="country-info__border-countries">
      <span className="border-countries__span">Border Countries: </span>
      {country.borders.length > 0 ? (
        <div className="border-countries__buttons">
          {data.map((borderCountry, index) => (
            <Button
              key={index}
              handleClick={handleBorderCountryClick}
              country={borderCountry}
            />
          ))}
        </div>
      ) : (
        "None"
      )}
    </div>
  );
}

export default BorderCountries;
