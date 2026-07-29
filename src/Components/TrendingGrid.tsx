import { Heading, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import TrendingCard from "./TrendingCard";
import MovieSkeleton from "./MovieSkeleton";
import useTrending from "../Hooks/useTrending";


const TrendingGrid = () => {
  const { error, data, isLoading } = useTrending();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid>
      {error && <Text>{error}</Text>}
      <Heading size="md" p={3}>
        Trending
      </Heading>
      <HStack overflow="auto" overflowY="hidden" gap={4}>
        {isLoading &&
          skeletons.map((skeleton) => <MovieSkeleton key={skeleton} />)}
        {data.map((trend) => (
          <TrendingCard key={trend.id} trend={trend} />
        ))}
      </HStack>
    </SimpleGrid>
  );
};

export default TrendingGrid;
