import { createContext, useReducer } from "react";

const initialState = {
  selectedCountry: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "country/selected":
      return { ...state, selectedCountry: action.payload };
    default:
      return { ...state };
  }
}

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [{ selectedCountry }, dispatch] = useReducer(reducer, initialState);
  return (
    <CountryContext.Provider value={{ selectedCountry, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
