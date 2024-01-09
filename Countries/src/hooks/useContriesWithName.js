import { useQuery } from "@tanstack/react-query";
import { getCountriesWithName } from "../service/getCountries";

const useContriesWithName = (text) => {
  const query = useQuery({
    queryKey: ["searchedCountries"],
    queryFn: () => getCountriesWithName(text),
  });
  return query;
};

export default useContriesWithName;
