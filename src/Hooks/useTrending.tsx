import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";

export interface Trending {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

interface TrendingResponse {
  page: string;
  results: Trending[];
}

const useTrending = () => {
  const [trending, setTrending] = useState<Trending[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<TrendingResponse>("/trending/movie/week")
      .then((res) => setTrending(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return { trending, error, isLoading };
};

export default useTrending;
