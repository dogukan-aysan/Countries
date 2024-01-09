import CountryCard from "./CountryCard";
import useCountries from "../hooks/useCountries";

function CountryGrid() {
  const { isLoading, isError, data, error } = useCountries();
  if (isLoading) return <div>LOADING...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <div className="main__grid">
      {data.map((country, i) => (
        <CountryCard key={i} country={country} />
      ))}
    </div>
  );
}

export default CountryGrid;
