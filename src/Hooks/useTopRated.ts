import type { Films } from "../Components/Constant";
import useData from "./useData";

const useTopRated = () => useData<Films>("/movie/top_rated");

export default useTopRated;
