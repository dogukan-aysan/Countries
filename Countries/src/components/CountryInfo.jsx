import { useContext } from "react";
import BorderCountries from "./BorderCountries";
import CountryOverview from "./CountryOverview";
import { CountryContext } from "../context/CountryContext";

function CountryInfo() {
  const { selectedCountry } = useContext(CountryContext);
  return (
    <div className="country-page__country-info">
      <img
        className="country-info__flag"
        src={selectedCountry.flags?.svg}
        alt="flag"
      />
      <div className="country-info__data-container">
        <CountryOverview country={selectedCountry} />
        {selectedCountry.borders && (
          <BorderCountries country={selectedCountry} />
        )}
      </div>
    </div>
  );
}

export default CountryInfo;
