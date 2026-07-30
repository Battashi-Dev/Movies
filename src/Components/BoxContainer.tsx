import { Box, Heading, Text } from "@chakra-ui/react";
import FormFilter, { type FilterFormData } from "./FormFilter";
import useData from "../Hooks/useData";
import { useState } from "react";
import type { Films } from "./Constant";

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
    <Box>
      <Box bg="gray.900" p={3} borderRadius={8}>
        <Heading fontSize="md" pb={4}>
          Filter
        </Heading>
        <FormFilter onApply={setFilters} />
      </Box>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {data.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </Box>
  );
};

export default BoxContainer;
