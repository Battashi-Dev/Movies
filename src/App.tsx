import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header " "hero " "content " "footer "`,
        lg: `"header header header" "sidebar hero panel" "sidebar content panel"`,
      }}
      templateColumns={{base: "1fr", lg: "180px 1fr 200px" }}
      templateRows={{base: "auto", lg: "auto 1fr auto"}}
      minH="100vh"
      gap={1}
      p={3}
      bg="gray.600"
    >
      <GridItem area="header" >
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="orange.200">
          sidebar
        </GridItem>
      </Show>
      <GridItem area="hero" bg="red.200">
        Hero
      </GridItem>
      <GridItem area="content" bg="purple.200">
        Content
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
