// GRID CHILD
function CountryCard() {
  return (
    <div className="country-card">
      <img
        className="country-card__flag"
        src="https://flagcdn.com/w320/tr.png"
        alt="flag"
      />
      <div className="country-card__overview">
        <h3 className="country-card__heading">Türkiye</h3>
        <ul className="country-card__list">
          <li className="country-card__list-item">
            <span className="list-item__field">Population: </span>84339067
          </li>
          <li className="country-card__list-item">
            <span className="list-item__field">Region: </span>Asia
          </li>
          <li className="country-card__list-item">
            <span className="list-item__field">Capital: </span>Ankara
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CountryCard;
