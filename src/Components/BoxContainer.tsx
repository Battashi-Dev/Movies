import {
  Box,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import FormFilter, { type FilterFormData } from "./FormFilter";
import useData from "../Hooks/useData";
import { useState } from "react";
import type { Films } from "./Constant";
import { IMAGE_URL } from "../Services/apiClient";

const BoxContainer = () => {
  const [filters, setFilters] = useState<FilterFormData>({
    sortBy: "popularity.desc",
    decade: "",
    rating: "",
  });
  const { data, isLoading, error } = useData<Films>(
    "/discover/movie",
    {
      params: {
        sort_by: filters.sortBy,
        ...(filters.rating && { "vote_average.gte": filters.rating }),
        ...(filters.decade && {
          "primary_release_date.gte": `${filters.decade}-01-01`,
          "primary_release_date.lte": `${Number(filters.decade) + 9}-12-31`,
        }),
      },
    },
    [filters],
  );
  return (
    <Box m={1}>
      <Box bg="gray.800" p={3} borderRadius={8} mb={3}>
        <Heading fontSize="md" pb={4}>
          Filter
        </Heading>
        <FormFilter onApply={setFilters} />
      </Box>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <Box bg="gray.800" borderRadius={8}>
        <List>
          {data.map((movie) => (
            <ListItem key={movie.id} py={2}>
              <HStack>
                <Image
                  boxSize="32px"
                  src={`${IMAGE_URL}${movie.backdrop_path}`}
                  borderRadius={8}
                  objectFit="cover"
                  pl={1}
                />
                <Text>{movie.title}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BoxContainer;
