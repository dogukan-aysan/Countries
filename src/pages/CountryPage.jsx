import { useQueryClient } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import CountryInfo from "../components/CountryInfo";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { CountryContext } from "../context/CountryContext";

function CountryPage() {
  const queryClient = useQueryClient();
  const { dispatch } = useContext(CountryContext);
  useEffect(() => {
    queryClient.resetQueries("searchedCountries");
    dispatch({ type: "searched", payload: "" });
  }, [queryClient, dispatch]);
  return (
    <div className="country-page">
      <Header />
      <main className="country-page__main">
        <BackButton />
        <CountryInfo />
      </main>
    </div>
  );
}

export default CountryPage;
