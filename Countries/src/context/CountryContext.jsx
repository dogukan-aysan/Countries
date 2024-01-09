import { createContext, useReducer } from "react";

const initialState = {
  selectedCountry: "",
  searchedText: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "country/selected":
      return { ...state, selectedCountry: action.payload };
    case "searched":
      return { ...state, searchedText: action.payload };
    default:
      return { ...state };
  }
}

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [{ selectedCountry, searchedText }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <CountryContext.Provider
      value={{ selectedCountry, searchedText, dispatch }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
