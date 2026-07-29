import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import HeroMovieGrid from "./Components/HeroMovieGrid";
import TrendingGrid from "./Components/TrendingGrid";
import TopRatedGrid from "./Components/TopRatedGrid";
import GenresList from "./Components/GenresList";
import { useState } from "react";
import MovieGrid from "./Components/MovieGrid";
import type { Genre } from "./Hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"header " "hero " "content " "footer "`,
        lg: `"header header header" "sidebar hero panel" "sidebar content panel"`,
      }}
      templateColumns={{ base: "auto", lg: "180px 1fr 200px" }}
      templateRows={{ base: "auto", lg: "auto" }}
      minH="100vh"
      gap={1}
      p={3}
    >
      <GridItem area="header">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="orange.200">
          sidebar
        </GridItem>
      </Show>
      <GridItem area="hero">
        <HeroMovieGrid />
      </GridItem>
      <GridItem area="content" minW={0} overflow="hidden">
        <GenresList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        {selectedGenre && <MovieGrid selectedGenre={selectedGenre} />}
        <TrendingGrid />
        <TopRatedGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area="panel" bg="blue.200">
          panel
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
