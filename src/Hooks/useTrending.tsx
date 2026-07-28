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

  useEffect(() => {
    apiClient
      .get<TrendingResponse>("/trending/movie/week")
      .then((res) => setTrending(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { trending, error };
};

export default useTrending;
