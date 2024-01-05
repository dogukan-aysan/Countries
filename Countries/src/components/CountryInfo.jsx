import BorderCountries from "./BorderCountries";
import CountryOverview from "./CountryOverview";

function CountryInfo() {
  return (
    <div className="country-page__country-info">
      <div className="country-info__flag">
        <img />
      </div>
      <CountryOverview />
      <BorderCountries />
    </div>
  );
}

export default CountryInfo;
