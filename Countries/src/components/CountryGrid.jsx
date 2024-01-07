import useCountries from "../hooks/useCountries";
import CountryCard from "./CountryCard";

function CountryGrid() {
  const { data, isLoading, isError } = useCountries();
  if (isLoading) return <div>LOADING...</div>;
  if (isError) return <div>ERROR</div>;
  return (
    <div className="main__grid">
      {data.map((country, i) => (
        <CountryCard key={i} country={country} />
      ))}
    </div>
  );
}

export default CountryGrid;
