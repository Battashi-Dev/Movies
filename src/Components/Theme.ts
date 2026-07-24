import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      "chakra-body-bg": { _dark: "gray.900", _white: "white" },
      "chakra-Body-text": { dark: "whiteAlpha.900", _white: "gray.800" },
    },
  },
  colors: {
    brand: {
      accent: "#0c2ff8",
    },
  },
});


