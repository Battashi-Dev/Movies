import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle switch"
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      variant="ghost"
      borderRadius="full"
      color="brand.accent"
    />
  );
};

export default ColorModeToggle;
