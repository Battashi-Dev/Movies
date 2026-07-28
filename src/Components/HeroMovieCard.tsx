import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
} from "@chakra-ui/react";
import type { HeroMovie } from "../Hooks/useHeroMovies";
import { IMAGE_URL } from "../Services/apiClient";
import { FaStar } from "react-icons/fa";

interface Props {
  hero: HeroMovie;
}
const HeroMovieCard = ({ hero }: Props) => {
  return (
    <Box
      position="relative"
      h={{ base: "300px", md: "500px" }}
      backgroundImage={`url(${IMAGE_URL}${hero.backdrop_path})`}
      bgSize="cover"
      bgPosition="center"
      borderRadius="lg"
      overflow="hidden"
      objectFit="cover"
      m={3}
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
      />
      <Box position="absolute" bottom={0} left={0} p={6}>
        <Heading color="white" size="4xl">
          {hero.title}
        </Heading>
        <HStack>
        <Tag>
          <Icon color="goldenrod" as={FaStar} /> {hero.vote_average.toFixed(1)}
        </Tag>
        <Tag>{hero.release_date}</Tag>
        </HStack>
        <Text color="whiteAlpha.800" noOfLines={2} maxW="600px">
          {hero.overview}
        </Text>
        <HStack>
          <Button bg="brand.accent" disabled>Watch Now</Button>
          <Button disabled>More Info</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default HeroMovieCard;
