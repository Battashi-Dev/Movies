import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import { CanceledError } from "axios";

export interface HeroMovie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_count: number
}

interface FetchMoviesResponse {
  dates: string;
  page: string;
  results: HeroMovie[];
}

const useHeroMovies = () => {
  const [movies, setMovies] = useState<HeroMovie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchMoviesResponse>("/movie/now_playing", {
        signal: controller.signal,
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { movies, error };
};

export default useHeroMovies;
