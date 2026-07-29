import useData from "./useData";

export interface HeroMovie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  adult: boolean;
  original_language: string;
}

const useHeroMovies = () => useData<HeroMovie>("/movie/now_playing")
  
export default useHeroMovies;
