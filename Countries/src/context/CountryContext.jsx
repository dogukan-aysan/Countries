import { createContext, useReducer } from "react";

const initialState = {
  selectedCountry: "",
  searchedText: "",
  selectedRegion: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "country/selected":
      return { ...state, selectedCountry: action.payload };
    case "searched":
      return { ...state, searchedText: action.payload, selectedRegion: "" };
    case "region":
      return { ...state, selectedRegion: action.payload };
    default:
      return { ...state };
  }
}

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [{ selectedCountry, searchedText, selectedRegion }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <CountryContext.Provider
      value={{ selectedCountry, searchedText, selectedRegion, dispatch }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
