import { Grid, GridItem, Show } from "@chakra-ui/react";

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
    >
      <GridItem area="header" bg="blue">
        NAV
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="orange">
          sidebar
        </GridItem>
      </Show>
      <GridItem area="hero" bg="red">
        Hero
      </GridItem>
      <GridItem area="content" bg="purple">
        Content
      </GridItem>
      <Show above="lg">
        <GridItem area="panel" bg="orange">
          panel
        </GridItem>
      </Show>
      
    </Grid>
  );
}
export default App;
