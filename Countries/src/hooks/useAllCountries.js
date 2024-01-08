import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../service/getCountries";

const useAllCountries = () => {
  const query = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });
  return query;
};

export default useAllCountries;