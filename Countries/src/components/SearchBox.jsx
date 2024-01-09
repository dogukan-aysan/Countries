import { useContext, useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CountryContext } from "../context/CountryContext";

function SearchBox() {
  const [typedText, setTypedText] = useState("");
  const { dispatch } = useContext(CountryContext);
  useEffect(() => {
    if (typedText !== "") dispatch({ type: "searched", payload: typedText });
  }, [typedText, dispatch]);
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
        onChange={(e) => setTypedText(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
