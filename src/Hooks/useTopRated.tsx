import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";

export interface TopRated {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

interface TopRatedResponse {
  page: number;
  results: TopRated[];
}

const useTopRated = () => {
  const [topRated, setTopRated] = useState<TopRated[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<TopRatedResponse>("/movie/top_rated")
      .then((res) => setTopRated(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return { topRated, error, isLoading };
};
export default useTopRated;
