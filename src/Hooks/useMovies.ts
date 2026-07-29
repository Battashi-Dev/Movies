import type { Films } from "../Components/Constant";
import useData from "./useData";
import type { Genre } from "./useGenres";

const useMovies = (selectedGenre: Genre | null) =>
  useData<Films>(
    "/discover/movie",
    {
      params: { with_genres: selectedGenre?.id },
    },
    [selectedGenre?.id],
  );

export default useMovies;
