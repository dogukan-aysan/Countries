import { useQuery } from "@tanstack/react-query";
import { getCountriesWithCode } from "../service/apiCountries";

const useCountriesWithCode = (codes) => {
  const query = useQuery({
    queryKey: ["borderCountries"],
    queryFn: () => getCountriesWithCode(codes),
  });
  return query;
};

export default useCountriesWithCode;
