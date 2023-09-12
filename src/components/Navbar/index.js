import React from "react";
import FilterByName from "../FilterByName";
import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  useColorMode,
  keyframes,
  useDisclosure,
  Show,
} from "@chakra-ui/react";

import ResponsiveAddNotes from "../ResponsiveAddNotes";

const spin = keyframes`  
  from {transform: rotate(-250deg);}   
  to {transform: rotate(250deg)} 
`;
function Navbar() {
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify={"space-between"}
      align={"start"}
      height={["auto", "auto", "auto", "11%"]}
      paddingTop={"20px"}
      marginBottom={"18px"}
      paddingX={{ base: 0, md: "12px", lg: "0" }}
      width={"100%"}
    >
      <Show below="lg">
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          borderRadius={"full"}
          padding={"0.5"}
        >
          <AddIcon />
        </Button>
        <ResponsiveAddNotes isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </Show>
      <FilterByName />
      <Button
        onClick={toggleColorMode}
        bgColor={"teal.500"}
        borderRadius={"full"}
        padding={"0.5"}
        _hover={{
          opacity: 0.6,
          animation: `${spin} infinite 2s ease-in-out alternate-reverse`,
        }}
      >
        {colorMode === "light" ? (
          <MoonIcon color={"whiteAlpha.900"} />
        ) : (
          <SunIcon />
        )}
      </Button>
    </Flex>
  );
}

export default Navbar;
