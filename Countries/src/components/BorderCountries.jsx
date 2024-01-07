import Button from "./Button";

function BorderCountries() {
  return (
    <div className="country-info__border-countries">
      <span className="border-countries__span">Border Countries: </span>
      <div className="border-countries__buttons">
        <Button>Armenia</Button>
        <Button>Azerbaijan</Button>
        <Button>Georgia</Button>
        <Button>Iran</Button>
        <Button>Iraq</Button>
        <Button>Syria</Button>
      </div>
    </div>
  );
}

export default BorderCountries;
