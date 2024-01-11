import { formatNumber } from "../utils/helpers";

function CountryOverview({ country }) {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;
  const formattedPopulation = formatNumber(population);
  return (
    <div className="country-info__overview">
      <h3 className="country-info__heading">{name.official}</h3>
      <ul className="country-info__list">
        <li className="country-info__list-item">
          <span className="country-info__field">Native Name: </span>
          <span className="country-info__value">
            {Object.values(name.nativeName)[0].official}
          </span>
        </li>
        <li className="country-info__list-item">
          <span className="country-info__field">Population: </span>
          <span className="country-info__value">{formattedPopulation}</span>
        </li>
        <li className="country-info__list-item">
          <span className="country-info__field">Region: </span>
          <span className="country-info__value">{region}</span>
        </li>

        <li className="country-info__list-item">
          <span className="country-info__field">Sub Region: </span>
          <span className="country-info__value">{subregion}</span>
        </li>
        <li className="country-info__list-item">
          <span className="country-info__field">Capital: </span>
          <span className="country-info__value">{capital}</span>
        </li>
        <li className="country-info__list-item">
          <span className="country-info__field">Top Level Domain: </span>
          <span className="country-info__value">{tld}</span>
        </li>
        <li className="country-info__list-item">
          <span className="country-info__field">Currencies: </span>
          <span className="country-info__value">
            {Object.values(currencies)[0].name}
          </span>
        </li>
        <li className="country-info__list-item">
          <span className="country-info__field">Languages: </span>
          <span className="country-info__value">
            {Object.values(languages)[0]}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CountryOverview;
