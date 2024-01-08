import { useQuery } from "@tanstack/react-query";
import { getCountriesWithCode } from "../service/getCountries";

const useSingleCountry = (codes) => {
  const query = useQuery({
    queryKey: ["borderCountries"],
    queryFn: () => getCountriesWithCode(codes),
  });
  return query;
};

export default useSingleCountry;
