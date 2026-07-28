import { Badge, Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import type { HeroMovie } from "../Hooks/useHeroMovies";
import { IMAGE_URL } from "../Services/apiClient";
import CriticalScore from "./CriticalScore";

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
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        p={6}
        w="50%"
        flexWrap="wrap"
        mb={1}
      >
        <Badge mb={5} bg="brand.accent">
          Now Playing
        </Badge>
        <Heading color="white" fontFamily="fantasy" size="3xl">
          {hero.title}
        </Heading>
        <HStack>
          <CriticalScore score={hero.vote_average} />
          <Badge variant="ghost" borderRadius="8">
            {hero.release_date}
          </Badge>
          <Badge variant="ghost" borderRadius="8">
            {hero.original_language}
          </Badge>
          {hero.adult && (
            <Badge variant="ghost" borderRadius="8" colorScheme="red">
              18+
            </Badge>
          )}
        </HStack>
        <Text color="whiteAlpha.800" maxW="600px">
          {hero.overview}
        </Text>
        <HStack>
          <Button bg="brand.accent" disabled>
            Watch Now
          </Button>
          <Button disabled>More Info</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default HeroMovieCard;
