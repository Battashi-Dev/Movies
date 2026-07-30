import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useTopRated from "../Hooks/useTopRated";
import MovieSkeleton from "./MovieSkeleton";
import MoviesCard from "./MoviesCard";

const TopRatedGrid = () => {
  const { error, data, isLoading } = useTopRated();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid>
      {error && <Text>{error}</Text>}
      <Heading size="md" p={3}>
        Top Rated
      </Heading>
      <HStack overflow="auto" overflowY="hidden" gap={4}>
        {isLoading &&
          skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
        {data.map((rated) => (
          <MoviesCard key={rated.id} trend={rated} />
        ))}
      </HStack>
    </SimpleGrid>
  );
};

export default TopRatedGrid;
