import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import TopRatedCard from "./TopRatedCard";
import useTopRated from "../Hooks/useTopRated";
import MovieSkeleton from "./MovieSkeleton";

const TopRatedGrid = () => {
  const { error, topRated, isLoading } = useTopRated();
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
        {topRated.map((rated) => (
          <TopRatedCard key={rated.id} rated={rated} />
        ))}
      </HStack>
    </SimpleGrid>
  );
};

export default TopRatedGrid;
