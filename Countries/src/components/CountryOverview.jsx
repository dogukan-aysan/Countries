function CountryOverview() {
  return (
    <div className="country-info__overview">
      <h3 className="overview__heading">Türkiye</h3>
      <ul className="overview__list">
        <li className="overview__list-item">
          <span className="list-item__field">Native Name: </span>Türkiye
        </li>
        <li className="overview__list-item">
          <span className="list-item__field">Population: </span>84339067
        </li>
        <li className="overview__list-item">
          <span className="list-item__field">Region: </span>Asia
        </li>

        <li className="overview__list-item">
          <span className="list-item__field">Sub Region: </span>Western Asia
        </li>
        <li className="overview__list-item">
          <span className="list-item__field">Capital: </span>Ankara
        </li>
        <li className="overview__list-item">
          <span className="list-item__field">Top Level Domain: </span>.tr
        </li>
        <li className="overview__list-item">
          <span className="list-item__field">Currencies: </span>Turkish lira
        </li>
        <li className="overview__list-item">
          <span className="list-item__field">Languages: </span>Turkish
        </li>
      </ul>
    </div>
  );
}

export default CountryOverview;
