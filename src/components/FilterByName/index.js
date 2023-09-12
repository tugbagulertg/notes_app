import {
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findSearchMethods, searchNote } from "../../redux/notesSlice";
import { SearchIcon } from "@chakra-ui/icons";

function FilterByName() {
  const dispatch = useDispatch();
  const [method, setMethod] = useState("title");
  const filtered = useSelector((state) => state.notes.filtered);

  const placeholder = useColorModeValue("gray.500", "white");
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");

  useEffect(() => {
    dispatch(findSearchMethods(method));
  }, [method,dispatch]);

  return (
    <Flex
      direction={"column"}
      align={{ base: "center", lg: "start" }}
      paddingX={{ base: "10px", sm: "30px", lg: "0" }}
      minWidth={"180px"}
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
    >
      <Flex
        align="center"
        border={"1px solid"}
        borderRadius={"0.775rem"}
        focusBorderColor="gray.600"
        paddingLeft={"1rem"}
        maxWidth={"600px"}
        width={"100%"}
        marginBottom={"10px"}
        boxShadow="md"
        borderColor={"gray.200"}
        transition={"all 3s linear"}
        bgColor={bgColor}
        height={"2.5rem"}
      >
        <SearchIcon color={placeholder} opacity={0.8} />
        <Input
          placeholder="Search Box"
          _placeholder={{ opacity: 0.7, color: placeholder }}
          value={filtered}
          focusBorderColor="transparent"
          border={"none"}
          paddingLeft={"10px"}
          marginRight={"5px"}
          height={"100%"}
          onChange={(e) => dispatch(searchNote(e.target.value))}
        />
      </Flex>

      <RadioGroup onChange={setMethod} value={method} paddingLeft={"10px"}>
        <Stack direction="row" id="stack">
          <Radio value="title" size={"sm"}>
            Search for titles.
          </Radio>
          <Radio value="content" size="sm">
            Search for contents.
          </Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
}

export default FilterByName;
