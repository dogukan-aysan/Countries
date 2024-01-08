import useSingleCountry from "../hooks/useCountriesWithCode";
import Button from "./Button";

function BorderCountries({ country }) {
  const bordersString = country.borders?.join(",");
  const { data, isLoading, isError } = useSingleCountry(bordersString);
  if (isLoading) return <div>LOADING...</div>;
  if (isError) return <div>ERROR</div>;
  return (
    <div className="country-info__border-countries">
      <span className="border-countries__span">Border Countries: </span>
      {country.borders ? (
        <div className="border-countries__buttons">
          {data.map((borderCountry, index) => (
            <Button key={index}>{borderCountry.name.common}</Button>
          ))}
        </div>
      ) : (
        "None"
      )}
    </div>
  );
}

export default BorderCountries;
