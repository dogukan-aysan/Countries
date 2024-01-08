import { createContext, useReducer } from "react";

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountryContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryProvider };
