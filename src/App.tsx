import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import HeroMovieGrid from "./Components/HeroMovieGrid";
import TrendingGrid from "./Components/TrendingGrid";
import TopRatedGrid from "./Components/TopRatedGrid";
import GenresList from "./Components/GenresList";
import { useState } from "react";
import MovieGrid from "./Components/MovieGrid";
import type { Genre } from "./Hooks/useGenres";
import BoxContainer from "./Components/BoxContainer";
import MenuBar from "./Components/MenuBar";

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
        <GridItem area="sidebar">
          <MenuBar />
        </GridItem>
      </Show>

      <GridItem area="hero">
        <Box id="homeRef">
          <HeroMovieGrid />
        </Box>
      </GridItem>

      <GridItem area="content" minW={0} overflow="hidden">
         <Box id="genreRef">
          
        <GenresList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </Box>
        <Box id="movieRef">
          <MovieGrid selectedGenre={selectedGenre} />
        </Box>
        <Box id="trendRef">
          <TrendingGrid />
        </Box>
        <TopRatedGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area="panel">
          <BoxContainer />
        </GridItem>
      </Show>
    </Grid>
  );
}
export default App;
