import CountryCard from "./CountryCard";
import useCountries from "../hooks/useCountries";
import Spinner from "./Spinner";

function CountryGrid() {
  const { isLoading, isError, data, error } = useCountries();
  if (isLoading) return <Spinner />;
  if (isError) return <div>{error}</div>;
  if (data.status === 404) return <div>{data.message}</div>;
  return (
    <div className="main__grid">
      {data.map((country, i) => (
        <CountryCard key={i} country={country} />
      ))}
    </div>
  );
}

export default CountryGrid;
