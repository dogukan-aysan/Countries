import Button from "./Button";

function BorderCountries({ country }) {
  return (
    <div className="country-info__border-countries">
      <span className="border-countries__span">Border Countries: </span>
      <div className="border-countries__buttons">
        {country.borders.map((borderCountry, index) => (
          <Button key={index}>{borderCountry}</Button>
        ))}
      </div>
    </div>
  );
}

export default BorderCountries;
