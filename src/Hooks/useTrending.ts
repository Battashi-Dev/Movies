import type { Films } from "../Components/Constant";
import useData from "./useData";


const useTrending = () => useData<Films>("/trending/movie/week");

export default useTrending;
