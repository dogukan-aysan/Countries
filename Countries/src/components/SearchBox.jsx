import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBox() {
  const [typedText, setTypedText] = useState();
  const handleChange = (text) => {
    setTypedText(text);
  };
  return (
    <div className="grid-header__search-box">
      <span className="search-box__magnifying-glass">
        <FaMagnifyingGlass />
      </span>
      <input
        className="search-box__input"
        type="text"
        placeholder="Search for a country..."
        value={typedText}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
