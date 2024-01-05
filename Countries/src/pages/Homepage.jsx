import CountryGrid from "../components/CountryGrid";
import Filter from "../components/Filter";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

function Homepage() {
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
