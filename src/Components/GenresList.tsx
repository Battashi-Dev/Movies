import { Box, Heading, HStack, Tag } from "@chakra-ui/react";
import useGenres, { type Genre } from "../Hooks/useGenres";
interface Props {
  onSelectedGenre: (genre:Genre) => void;
}

const GenresList = ({onSelectedGenre}: Props) => {
  const { genres } = useGenres();
  return (
    <Box>
      <Heading size="md" p={3}>
        Genres
      </Heading>
      <HStack overflow="auto" overflowY="hidden">
        {genres.map((genre) => (
          <Tag
          onClick={() => onSelectedGenre(genre)}
            key={genre.id}
            _hover={{ bg: "brand.accent" }}
            flexShrink={0}
            size="sm"
            variant="ghost"
            borderRadius={10}
          >
            {genre.name}
          </Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default GenresList;
