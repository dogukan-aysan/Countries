import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../context/CountryContext";

function Filter() {
  const [selected, setSelected] = useState("");
  const { dispatch } = useContext(CountryContext);
  useEffect(() => {
    dispatch({ type: "region", payload: selected });
  }, [selected, dispatch]);
  return (
    <select
      className="grid-header__filter"
      onChange={(e) => setSelected(e.target.value)}
    >
      <option className="grid-header__filter-item" defaultValue={true} hidden>
        Filter by Region
      </option>
      <option className="grid-header__filter-item" value="africa">
        Africa
      </option>
      <option className="grid-header__filter-item" value="america">
        America
      </option>
      <option className="grid-header__filter-item" value="asia">
        Asia
      </option>
      <option className="grid-header__filter-item" value="europe">
        Europe
      </option>
      <option className="grid-header__filter-item" value="oceania">
        Oceania
      </option>
    </select>
  );
}

export default Filter;
