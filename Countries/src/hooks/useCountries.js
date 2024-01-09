import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../service/apiCountries";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const useCountries = () => {
  const { searchedText, selectedRegion } = useContext(CountryContext);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["countries", searchedText, selectedRegion],
    queryFn: () => getCountries(searchedText, selectedRegion),
  });
  return { isLoading, isError, data, error };
};

export default useCountries;
