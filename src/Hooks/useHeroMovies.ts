import type { Films } from "../Components/Constant";
import useData from "./useData";

const useHeroMovies = () => useData<Films>("/movie/now_playing");

export default useHeroMovies;
