function Button({ country, handleClick }) {
  return (
    <button onClick={() => handleClick(country)} className="button">
      {country.name.common}
    </button>
  );
}

export default Button;
