import { Box, Heading, Image } from "@chakra-ui/react";
import { IMAGE_URL } from "../Services/apiClient";
import CriticalScore from "./CriticalScore";
import type { Films } from "./Constant";

interface Props {
  trend: Films;
}

const MoviesCard = ({ trend }: Props) => {
  return (
    <Box h="300px" w="200px" flexShrink={0} position="relative">
      <Image
        src={`${IMAGE_URL}${trend.backdrop_path}`}
        alt={trend.title}
        objectFit="cover"
        h="90%"
        w="100%"
        borderRadius="20px"
        pb={2}
      />
      <Box position="absolute" top="0.5rem" left="0.5rem">
        <CriticalScore score={trend.vote_average} />
      </Box>
      <Heading size="sm">{trend.title}</Heading>
    </Box>
  );
};

export default MoviesCard;
