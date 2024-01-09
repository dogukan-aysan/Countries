import { useQuery } from "@tanstack/react-query";
import { getCountriesWithName } from "../service/apiCountries";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const useContriesWithName = () => {
  const { searchedText } = useContext(CountryContext);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["searchedCountries", searchedText],
    queryFn: () => getCountriesWithName(searchedText),
  });
  return { isLoading, isError, data, error };
};

export default useContriesWithName;
