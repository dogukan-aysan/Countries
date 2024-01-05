import CountryGrid from "../components/CountryGrid";
import Filter from "../components/Filter";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBox />
      <Filter />
      <CountryGrid />
    </div>
  );
}

export default Homepage;
