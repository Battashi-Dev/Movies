import { Box, Button, Heading, Icon } from "@chakra-ui/react";
import { MENUS } from "./Constant";
import { useState } from "react";


const MenuBar = () => {
 const [activeView, setActiveView] = useState<string| null>(null)
  return (
    <Box h="100vh" bg="gray.800" mr={2} pt={5} borderRadius={8} pr={2}>
      {MENUS.map(({ icon, title, ref }) => (
        <Button
          _hover={{ bg: "brand.accent" }}
          key={title}
          bg={activeView === title ? "brand.accent": undefined}
          gap={5}
          borderRadius={15}
          variant="ghost"
          pl={2}
          onClick={() => {
            setActiveView(title);
            document
              .getElementById(ref)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Icon boxSize={6} as={icon} />
          <Heading fontSize="1xl">{title}</Heading>
        </Button>
      ))}
    </Box>
  );
};

export default MenuBar;
