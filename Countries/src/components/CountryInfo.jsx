import BorderCountries from "./BorderCountries";
import CountryOverview from "./CountryOverview";
import Flag from "./Flag";

function CountryInfo() {
  return (
    <div className="country-page__country-info">
      <div className="country-info__flag">
        <Flag />
      </div>
      <CountryOverview />
      <BorderCountries />
    </div>
  );
}

export default CountryInfo;
