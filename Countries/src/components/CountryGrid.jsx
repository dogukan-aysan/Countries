import useCountries from "../hooks/useCountries";
import CountryCard from "./CountryCard";

function CountryGrid() {
  const { data, isLoading, isError } = useCountries();
  console.log(data);
  return (
    <div className="main__grid">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
}

export default CountryGrid;
