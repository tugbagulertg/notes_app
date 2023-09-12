import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Flex justify={"center"}>
      <Box paddingTop={"8px"}>
        <Flex align={"center"} justify={"center"}>
          <Link
            href="https://www.linkedin.com/in/tugbagulerr/"
            target="_blank"
            marginRight={"15px"}
            fontSize={["25px", "25px", "25px", "30px"]}
            onMouseOver={(e) => (e.target.style.opacity = "0.6")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/tugbagulertg"
            target="_blank"
            fontSize={["25px", "25px", "25px", "30px"]}
            onMouseOver={(e) => (e.target.style.opacity = "0.6")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            <FaGithub />
          </Link>
        </Flex>

        <Box textAlign={"center"} marginY={"5px"}>
          Created By Tugba Guler
        </Box>
      </Box>
    </Flex>
  );
}

export default Footer;
