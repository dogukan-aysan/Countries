import CountryGrid from "../components/CountryGrid";
import Filter from "../components/Filter";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <Header />
      </div>
      <div className="homepage__main">
        <div className="main__grid-header">
          <SearchBox />
          <Filter />
        </div>
        <CountryGrid />
      </div>
    </div>
  );
}

export default Homepage;
