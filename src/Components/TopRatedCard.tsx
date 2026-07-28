import  { Box, Heading, Image } from "@chakra-ui/react";
import type { TopRated } from "../Hooks/useTopRated";
import { IMAGE_URL } from "../Services/apiClient";

interface Props {
  rated: TopRated;
}

const TopRatedCard = ({ rated }: Props) => {
  return (
    <Box h="300px" w="200px" flexShrink={0}>
      <Image
        src={`${IMAGE_URL}${rated.backdrop_path}`}
        alt={rated.title}
        objectFit="cover"
        h="90%"
        w="100%"
        borderRadius="20px"
        pb={2}
      />
      <Heading size="sm">{rated.title}</Heading>
    </Box>
  );
};

export default TopRatedCard;
