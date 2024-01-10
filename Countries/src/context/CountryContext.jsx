import { createContext, useEffect, useReducer } from "react";

const initialState = {
  selectedCountry: "",
  searchedText: "",
  selectedRegion: "",
  isDarkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "country/selected":
      return { ...state, selectedCountry: action.payload };
    case "searched":
      return { ...state, searchedText: action.payload, selectedRegion: "" };
    case "region":
      return { ...state, selectedRegion: action.payload };
    case "darkMode":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return { ...state };
  }
}

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [
    { selectedCountry, searchedText, selectedRegion, isDarkMode },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark-mode")
      : document.documentElement.classList.remove("dark-mode");
  }, [isDarkMode]);

  return (
    <CountryContext.Provider
      value={{
        selectedCountry,
        searchedText,
        selectedRegion,
        isDarkMode,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
