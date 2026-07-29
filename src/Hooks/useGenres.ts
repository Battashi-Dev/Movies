import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";

interface Genre {
  id: number;
  name: string;
}

interface GenreFetchResponse {
  genres: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GenreFetchResponse>("/genre/movie/list")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message));
  }, []);
  return { genres, error };
};

export default useGenres;
