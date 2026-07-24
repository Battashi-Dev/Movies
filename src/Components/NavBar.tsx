import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { PiFilmSlate } from "react-icons/pi";
import logo from "../assets/images.jpeg";
const NavBar = () => {
  return (
    <HStack justify="space-between">
      <HStack>
        <Icon as={PiFilmSlate} />
        <Heading fontSize="sm">Movie Discovery App</Heading>
      </HStack>
      <Box>
        <InputGroup>
          <InputRightElement>
            <CiSearch />
          </InputRightElement>
          <Input />
        </InputGroup>
      </Box>
      <HStack>
        <Image boxSize="30px" borderRadius="full" src={logo} />
      </HStack>
    </HStack>
  );
};

export default NavBar;
