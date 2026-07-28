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

  useEffect(() => {
    apiClient
      .get<TopRatedResponse>("/movie/top_rated")
      .then((res) => setTopRated(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { topRated, error };
};
export default useTopRated;
