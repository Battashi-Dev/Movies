import { Box, Heading, Image } from "@chakra-ui/react";
import type { Trending } from "../Hooks/useTrending";
import { IMAGE_URL } from "../Services/apiClient";

interface Props {
  trend: Trending;
}

const TrendingCard = ({ trend }: Props) => {
  return (
    <Box  h="300px" w="200px" flexShrink={0} >
      <Image
        src={`${IMAGE_URL}${trend.backdrop_path}`}
        alt={trend.title}
        objectFit="cover"
        h="90%"
        w="100%"
        borderRadius="20px"
        pb={2}
      />
      <Heading size="sm">{trend.title}</Heading>
    </Box>
  );
};

export default TrendingCard;
