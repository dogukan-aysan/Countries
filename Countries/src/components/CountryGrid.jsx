import { useContext } from "react";
import CountryCard from "./CountryCard";
import { CountryContext } from "../context/CountryContext";
import useContriesWithName from "../hooks/useContriesWithName";

function CountryGrid() {
  const { searchedText } = useContext(CountryContext);
  const { isLoading, isError, data, error } = useContriesWithName(searchedText);
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
