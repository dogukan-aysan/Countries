import Button from "./Button";

function BorderCountries() {
  return (
    <div className="country-info__border-countries">
      <span className="border-countries__span">Border Countries: </span>
      <div className="border-countries__buttons">
        <Button>X</Button>
        <Button>Y</Button>
        <Button>Z</Button>
      </div>
    </div>
  );
}

export default BorderCountries;
