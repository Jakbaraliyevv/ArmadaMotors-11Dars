import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchData = (endpoint) => {
  const fetcher = async () => {
    const response = await axios.get(endpoint);
    return response.data;
  };

  return useQuery({
    queryKey: [endpoint],
    queryFn: fetcher,
  });
};

export default useFetchData;
