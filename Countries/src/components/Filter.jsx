function Filter() {
  return (
    <select className="grid-header__filter">
      <option className="grid-header__filter-item" defaultValue={true} hidden>
        Filter by Region
      </option>
      <option className="grid-header__filter-item">Africa</option>
      <option className="grid-header__filter-item">America</option>
      <option className="grid-header__filter-item">Asia</option>
      <option className="grid-header__filter-item">Europe</option>
      <option className="grid-header__filter-item">Oceania</option>
    </select>
  );
}

export default Filter;
