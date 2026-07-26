import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import type { HeroMovie } from "../Hooks/useHeroMovies";
import { IMAGE_URL } from "../Services/apiClient";

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

        <Text color="whiteAlpha.800" noOfLines={2} maxW="600px">
          {hero.overview}
        </Text>
        <HStack>
          <Button bg="brand.accent">Watch Now</Button>
          <Button>More Info</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default HeroMovieCard;
