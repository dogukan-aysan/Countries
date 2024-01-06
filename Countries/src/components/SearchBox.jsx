import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBox() {
  return (
    <div className="grid-header__search-box">
      <span className="search-box__magnifying-glass">
        <FaMagnifyingGlass />
      </span>
      <input
        className="search-box__input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBox;
