import { Box, Heading, Image } from "@chakra-ui/react";
import type { TopRated } from "../Hooks/useTopRated";
import { IMAGE_URL } from "../Services/apiClient";
import CriticalScore from "./CriticalScore";

interface Props {
  rated: TopRated;
}

const TopRatedCard = ({ rated }: Props) => {
  return (
    <Box h="300px" w="200px" flexShrink={0} position="relative">
      <Image
        src={`${IMAGE_URL}${rated.backdrop_path}`}
        alt={rated.title}
        objectFit="cover"
        h="90%"
        w="100%"
        borderRadius="20px"
        pb={2}
      />
      <Box position="absolute" top="0.5rem" left="0.5rem">
        <CriticalScore score={rated.vote_average} />
      </Box>
      <Heading size="sm">{rated.title}</Heading>
    </Box>
  );
};

export default TopRatedCard;
