import "./App.css";
import AddNotes from "./components/AddNotes";
import FilterByColor from "./components/FilterByColor";
import ListedNotes from "./components/ListedNotes";
import { Box, Flex, Hide, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React from "react";

function App() {
  const bgColor = useColorModeValue("yellow.50", "gray.800");

  return (
    <Box
      bgColor={bgColor}
      overflow={"hidden"}
      fontFamily="mono"
      w={["100vw"]}
      h="100vh"
      paddingX={{
        base: "12px",
        sm: "25px",
        md: "50px",
        lg: "25px",
        "2xl": "45px",
      }}
    >
      <Flex
        justify="space-between"
        direction={["column", "column", "column", "row"]}
        h="100vh"
      >
        <Box width={{ md: "40%", lg: "30%", xl: "28%" }}>
          <Hide below="lg">
            <Box
              fontSize={{ sm: "3xl", "2xl": "4xl" }}
              paddingLeft={"7px"}
              paddingTop={"20px"}
              height={["auto", "auto", "auto", "11%"]}
              marginBottom={"18px"}
            >
              Remember Me!
            </Box>
            <Flex
              direction={"column"}
              h={"100%"}
              textAlign={"start"}
              justify={"space-between"}
              paddingRight={"20px"}
              height={"87%"}
            >
              <AddNotes />
              <FilterByColor />
              <Footer />
            </Flex>
          </Hide>
        </Box>

        <Box
          w={{ xl: "75%", "2xl": "72%" }}
          h={"100%"}
          paddingLeft={{ md: "0", "2xl": "20px" }}
        >
          <Navbar />
          <Box
            h={"100%"}
            overflow={"auto"}
            paddingRight={{ base: "10px", md: "20px" }}
          >
            <ListedNotes />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
