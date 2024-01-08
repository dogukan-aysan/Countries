function Button({ country, handleClick }) {
  console.log(country);
  return (
    <button onClick={() => handleClick(country)} className="button">
      {country.name.common}
    </button>
  );
}

export default Button;
