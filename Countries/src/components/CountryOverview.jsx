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
  return (
    <div className="country-info__overview">
      <h3 className="country-info__heading">{name.official}</h3>
      <ul className="country-info__list">
        <li className="country-info__list-item">
          <span className="list-item__field">Native Name: </span>
          {Object.values(name.nativeName)[0].official}
        </li>
        <li className="country-info__list-item">
          <span className="list-item__field">Population: </span>
          {population}
        </li>
        <li className="country-info__list-item">
          <span className="list-item__field">Region: </span>
          {region}
        </li>

        <li className="country-info__list-item">
          <span className="list-item__field">Sub Region: </span>
          {subregion}
        </li>
        <li className="country-info__list-item">
          <span className="list-item__field">Capital: </span>
          {capital}
        </li>
        <li className="country-info__list-item">
          <span className="list-item__field">Top Level Domain: </span>
          {tld}
        </li>
        <li className="country-info__list-item">
          <span className="list-item__field">Currencies: </span>
          {Object.values(currencies)[0].name}
        </li>
        <li className="country-info__list-item">
          <span className="list-item__field">Languages: </span>
          {Object.values(languages)[0]}
        </li>
      </ul>
    </div>
  );
}

export default CountryOverview;
