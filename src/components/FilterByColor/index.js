import { Box, Select, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { findColor, sortByColors } from "../../redux/notesSlice";

function FilterByColor() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.notes.colors);
  const sortMethod = useSelector((state) => state.notes.sortMethod);
  const radioColor = useSelector((state) => state.notes.radioColor);

  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");

  return (
    <Box marginTop={"20px"}>
      <Box fontSize={["md", "lg", "xl", "2xl"]} pl={"7px"}>
        Categories
      </Box>
      <Select
        boxShadow="md"
        borderRadius="3xl"
        placeholder="All Notes"
        onChange={(e) => dispatch(findColor(e.target.value))}
        value={colors}
        marginY={"10px"}
        focusBorderColor="gray.300"
        bgColor={bgColor}
        borderColor={radioColor}
      >
        <option value="blue.200">Blue Notes</option>
        <option value="green.200">Green Notes</option>
        <option value="purple.200">Purple Notes</option>
        <option value="red.400">Red Notes</option>
        <option value="yellow.300">Yellow Notes</option>
      </Select>
      <Select
        borderRadius="3xl"
        boxShadow="md"
        focusBorderColor="gray.300"
        placeholder="Sort by created"
        borderColor={radioColor}
        bgColor={bgColor}
        onChange={(e) => dispatch(sortByColors(e.target.value))}
        value={sortMethod}
      >
        <option value="byColor"> Sort by colors</option>
      </Select>
    </Box>
  );
}

export default FilterByColor;
