import { useEffect, useState } from "react";
import apiClient from "./Services/apiClient";
import { List, ListItem, Text } from "@chakra-ui/react";

interface Movie {
  id: number;
  title: string;
}

interface FetchMoviesResponse {
  dates: string;
  page: string;
  results: Movie[];
}
const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/movie/now_playing")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id}>{movie.title}</ListItem>
        ))}
      </List>
    </>
  );
};

export default MovieGrid;
