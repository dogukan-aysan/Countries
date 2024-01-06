import BorderCountries from "./BorderCountries";
import CountryOverview from "./CountryOverview";

function CountryInfo() {
  return (
    <div className="country-page__country-info">
      <img
        className="country-info__flag"
        src="https://flagcdn.com/w320/tr.png"
        alt="flag"
      />
      <div className="country-info__data-container">
        <CountryOverview />
        <BorderCountries />
      </div>
    </div>
  );
}

export default CountryInfo;
