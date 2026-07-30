import { Button, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'

export interface FilterFormData {
  sortBy: string;
  decade: string;
  rating: string;
}

interface Props {
  onApply: (filters: FilterFormData) => void;
}
const FormFilter = ({onApply}: Props) => {
 const {register, handleSubmit} = useForm<FilterFormData>()
  return (
    <form onSubmit={handleSubmit(onApply)}>
      <FormControl>
        <FormLabel>Sort by</FormLabel>
        <Select size="sm" borderRadius={8} {...register("sortBy")} >
          <option value="popularity.desc">Popularity</option>
          <option value="vote_average.desc">Rating</option>
          <option value="release_date.desc">Newest</option>
          <option value="vote_count.desc">Most voted</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Release date</FormLabel>
        <Select size="sm" borderRadius={8} {...register("decade")}>
          <option>any time</option>
          <option value="2020">2020s</option>
          <option value="2010">2010s</option>
          <option value="2000">2000s</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Rating</FormLabel>
        <Select size="sm" borderRadius={8} {...register("rating")} >
          <option value="">Any</option>
          <option value="9">9+</option>
          <option value="7">7+</option>
          <option value="5">5+</option>
        </Select>
      </FormControl>
      <Button mt={2} borderRadius={8} size="sm" type="submit" bg="brand.accent">
        Apply Filters
      </Button>
    </form>
  );
};

export default FormFilter;
