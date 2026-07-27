import { Heading, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import useTrending from "../Hooks/useTrending";
import TrendingCard from "./TrendingCard";

const TrendingGrid = () => {
  const { error, trending } = useTrending();
  return (
    <SimpleGrid>
    {error && <Text>{error}</Text>}
    <Heading size="md" p={3}>Trending Movie</Heading>
    <HStack overflow="auto" overflowY="hidden" gap={4}>
      {trending.map((trend) => (
        <TrendingCard key={trend.id} trend={trend} />
      ))}
    </HStack>
    </SimpleGrid>
  );
};

export default TrendingGrid;
