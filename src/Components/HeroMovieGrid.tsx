import { List, ListItem, Text } from "@chakra-ui/react";
import useHeroMovies from "../Hooks/useHeroMovies";

const HeroMovieGrid = () => {
  const { movies, error } = useHeroMovies();

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

export default HeroMovieGrid;
