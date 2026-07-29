import useData from "./useData";

export interface Trending {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
}
const useTrending = () => useData<Trending>("/trending/movie/week")


  
 

export default useTrending;
