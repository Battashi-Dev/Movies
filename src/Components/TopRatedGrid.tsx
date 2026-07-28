import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import TopRatedCard from "./TopRatedCard";
import useTopRated from "../Hooks/useTopRated";

const TopRatedGrid = () => {
  const { error, topRated } = useTopRated();
  return (
    <SimpleGrid>
      {error && <Text>{error}</Text>}
      <Heading size="md" p={3}>
        Top Rated
      </Heading>
      <HStack overflow="auto" overflowY="hidden" gap={4}>
        {topRated.map((rated) => (
          <TopRatedCard key={rated.id} rated={rated} />
        ))}
      </HStack>
    </SimpleGrid>
  );
};

export default TopRatedGrid;
