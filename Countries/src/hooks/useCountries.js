import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../service/apiCountries";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const useCountries = () => {
  const { searchedText } = useContext(CountryContext);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["countries", searchedText],
    queryFn: () => getCountries(searchedText),
  });
  return { isLoading, isError, data, error };
};

export default useCountries;
