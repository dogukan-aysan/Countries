import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CountryContext } from "../context/CountryContext";

function Filter() {
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [selected, setSelected] = useState("");
  const { dispatch, selectedRegion } = useContext(CountryContext);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    dispatch({ type: "region", payload: selected });
  }, [selected, dispatch]);

  const handleOptionClick = (e) => {
    setSelected(e);
    setIsDropdownExpanded(!isDropdownExpanded);
  };

  return (
    <div className={`dropdown${isDropdownExpanded ? " active" : ""}`}>
      <button
        className="dropdown__button"
        role="combobox"
        aria-labelledby="dropdown button"
        aria-haspopup="listbox"
        aria-expanded={isDropdownExpanded}
        aria-controls="dropdown options"
        onClick={() => setIsDropdownExpanded(!isDropdownExpanded)}
      >
        <span className="dropdown__selected-value">
          {selectedRegion ? selectedRegion : "Filter by Region"}
        </span>
        <span className="dropdown__arrow">
          <IoIosArrowDown />
        </span>
      </button>
      <ul role="listbox" className="dropdown__options" id="dropdown options">
        {regions.map((region, index) => (
          <li key={index} role="option" className="dropdown__option">
            <input
              className="dropdown__input"
              type="radio"
              id={region}
              name="region"
            />
            <label
              onClick={(e) => handleOptionClick(e.target.htmlFor)}
              className="dropdown__label"
              htmlFor={region}
            >
              {region}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
