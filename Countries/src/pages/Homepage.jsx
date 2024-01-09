import { useQueryClient } from "@tanstack/react-query";
import CountryGrid from "../components/CountryGrid";
import Filter from "../components/Filter";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { useContext, useEffect } from "react";
import { CountryContext } from "../context/CountryContext";

function Homepage() {
  const queryClient = useQueryClient();
  const { selectedCountry, dispatch } = useContext(CountryContext);
  useEffect(() => {
    if (selectedCountry !== "")
      dispatch({ type: "country/selected", payload: "" });
    queryClient.resetQueries("country");
  }, [queryClient, selectedCountry, dispatch]);
  return (
    <div className="homepage">
      <Header />
      <main className="homepage__main">
        <div className="main__grid-header">
          <SearchBox />
          <Filter />
        </div>
        <CountryGrid />
      </main>
    </div>
  );
}

export default Homepage;
