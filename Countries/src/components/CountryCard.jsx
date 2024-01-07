import { useNavigate } from "react-router-dom";

// GRID CHILD
function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/country-details/456");
  };
  return (
    <div className="country-card" onClick={handleClick}>
      <img className="country-card__flag" src={flags.png} alt="flag" />
      <div className="country-card__overview">
        <h3 className="country-card__heading">{name.official}</h3>
        <ul className="country-card__list">
          <li className="country-card__list-item">
            <span className="list-item__field">Population: </span>
            {population}
          </li>
          <li className="country-card__list-item">
            <span className="list-item__field">Region: </span>
            {region}
          </li>
          <li className="country-card__list-item">
            <span className="list-item__field">Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CountryCard;
