import { Box, Text } from "@chakra-ui/react";
import useHeroMovies from "../Hooks/useHeroMovies";
import HeroMovieCard from "./HeroMovieCard";
import useSlideIndex from "../Hooks/useSlideIndex";
import HeroCardSkeleton from "./HeroCardSkeleton";

const HeroMovieGrid = () => {
  const { data, error, isLoading } = useHeroMovies();
  const index = useSlideIndex(data.length);

  if (error) return <Text>{error}</Text>;
  if (!isLoading && data.length === 0) return null;
  return (
    <Box
      overflow="hidden"
      borderRadius="lg"
      h={{ base: "250px", md: "400px", lg: "500px" }}
    >
      <Box
        display="flex"
        transform={`translateX(-${index * 100}%)`}
        transition="transform 0.6s ease-in-out"
      >
        {isLoading && <HeroCardSkeleton />}
        {data.map((movie) => (
          <Box key={movie.id} flex="0 0 100%">
            <HeroMovieCard hero={movie} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeroMovieGrid;
