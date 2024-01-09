import { useQuery } from "@tanstack/react-query";
import { getCountriesWithName } from "../service/apiCountries";

const useContriesWithName = (text) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["searchedCountries", text],
    queryFn: () => getCountriesWithName(text),
  });
  return { isLoading, isError, data, error };
};

export default useContriesWithName;
