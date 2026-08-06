import {
  LuClapperboard,
  LuHouse,
  LuTags,
  LuTrendingUp,
} from "react-icons/lu";

export interface Films {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  adult: boolean;
  original_language: string;
  popularity: number;
  vote_count: number;
}

export const MENUS = [
  { icon: LuHouse, title: "Home", ref: "homeRef" },
  { icon: LuClapperboard, title: "Movies", ref:"movieRef"},
 // { icon: LuUsers, title: "People", ref:"" },
  { icon: LuTags, title: "Genre", ref:"genreRef" },
  { icon: LuTrendingUp, title: "Trending", ref:"trendRef" },
]as const;

export type MenuItem = typeof MENUS[number];