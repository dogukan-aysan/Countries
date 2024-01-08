import { useQueryClient } from "@tanstack/react-query";
import CountryGrid from "../components/CountryGrid";
import Filter from "../components/Filter";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { useEffect } from "react";

function Homepage() {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.resetQueries("country");
  }, [queryClient]);
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
