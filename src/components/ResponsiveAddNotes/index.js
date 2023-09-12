import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import AddNotes from "../AddNotes";
import FilterByColor from "../FilterByColor";
import Footer from "../Footer";

function ResponsiveAddNotes({ isOpen, onClose, btnRef }) {
  const bgColor = useColorModeValue("yellow.50", "gray.800");

  return (
    <Drawer
      placement="left"
      isOpen={isOpen}
      finalFocusRef={btnRef}
      onClose={onClose}
      size={["xs", "xs", "sm", "md"]}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box
          h={"100%"}
          m={0}
          p={0}
          fontFamily={"mono"}
          bg={bgColor}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <DrawerHeader
            fontWeight={"normal"}
            fontSize={{ base: "3xl", sm: "4xl" }}
          >
            Remember Me!
          </DrawerHeader>
          <DrawerCloseButton mt={"7px"} />

          <DrawerBody paddingX={"15px"}>
            <AddNotes onClose={onClose} />
            <FilterByColor />
          </DrawerBody>
          <DrawerFooter p={0} justifyContent={"center"}>
            <Footer />
          </DrawerFooter>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}

export default ResponsiveAddNotes;
