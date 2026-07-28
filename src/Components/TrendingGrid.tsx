import { Heading, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import useTrending from "../Hooks/useTrending";
import TrendingCard from "./TrendingCard";
import MovieSkeleton from "./MovieSkeleton";

const TrendingGrid = () => {
  const { error, trending, isLoading} = useTrending();
  const skeletons = [1, 2, 3, 4, 5, 6, ]
  return (
    <SimpleGrid>
      {error && <Text>{error}</Text>}
      <Heading size="md" p={3}>
        Trending Movie
      </Heading>
      <HStack overflow="auto" overflowY="hidden" gap={4}>
        {isLoading && skeletons.map(skeleton => <MovieSkeleton key={skeleton} />)}
        {trending.map((trend) => (
          <TrendingCard key={trend.id} trend={trend} />
        ))}
      </HStack>
    </SimpleGrid>
  );
};

export default TrendingGrid;
