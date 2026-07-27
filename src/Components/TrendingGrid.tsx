import { List, ListItem, Text } from "@chakra-ui/react";
import useTrending from "../Hooks/useTrending";

const TrendingGrid = () => {
  const { error, trending } = useTrending();
  return (
    <>
    {error && <Text>{error}</Text>}
    <List>
      {trending.map((trend) => (
        <ListItem key={trend.id}>{trend.title}</ListItem>
      ))}
    </List>
    </>
  );
};

export default TrendingGrid;
