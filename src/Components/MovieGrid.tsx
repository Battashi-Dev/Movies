import { SimpleGrid, Heading, HStack, Text } from "@chakra-ui/react";
import MovieSkeleton from "./MovieSkeleton";
import useMovies from "../Hooks/useMovies";
import type { Genre } from "../Hooks/useGenres";
import MoviesCard from "./MoviesCard";

interface Props {
  selectedGenre: Genre | null;
}
const MovieGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useMovies(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid>
      {error && <Text>{error}</Text>}
      <Heading size="md" p={3}>
        Movies
      </Heading>
      <HStack overflow="auto" overflowY="hidden" gap={4}>
        {isLoading &&
          skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
        {data.map((movie) => (
          <MoviesCard key={movie.id} trend={movie} />
        ))}
      </HStack>
    </SimpleGrid>
  );
};

export default MovieGrid;
