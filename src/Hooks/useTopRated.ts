import useData from "./useData";

export interface TopRated {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}

const useTopRated = () => useData<TopRated>("/movie/top_rated");

export default useTopRated;
