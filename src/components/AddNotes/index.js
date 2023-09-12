import {
  Button,
  Input,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Box,
  Flex,
  useColorModeValue,
  useMediaQuery,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, catchRadioColor } from "../../redux/notesSlice";
import { AddIcon } from "@chakra-ui/icons";

function AddNotes({ onClose }) {
  const dispatch = useDispatch();
  const [header, setHeader] = useState("");
  const [details, setDetails] = useState("");
  const [color, setColor] = useState("blue.200");

  const toast = useToast();
  const textColor = useColorModeValue("white", "black");
  const placeholder = useColorModeValue("gray.600", "white");
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");
  const [isSmallerThan992] = useMediaQuery("(max-width: 992px)");

  const handleInputChange = (e) => {
    setHeader(e.target.value);
    console.log(header.length);
    if (header.length >= 50) {
      toast({
        title: "Error",
        description: "The title can be a maximum of 50 characters.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (header.length >= 3 && details.length >= 3) {
      dispatch(addNote({ header, details, color, date: new Date() }));
      setHeader("");
      setDetails("");
      toast({
        title: "Success!",
        description: "The note was successfully created.",
        status: "success",
        isClosable: true,
        position: "top",
      });
      isSmallerThan992 && onClose();
    }
    if (header.length < 3 || details.length < 3) {
      alert("Title and details must be at least 3 characters.");
    }
  };

  useEffect(() => {
    dispatch(catchRadioColor(color));
  }, [color, dispatch]);

  return (
    <Box w={"100%"}>
      <Input
        value={header}
        onChange={handleInputChange}
        placeholder="Title"
        borderRadius="3xl"
        focusBorderColor={color}
        borderColor={color}
        borderWidth={"2px"}
        marginBottom="15px"
        paddingX={{ base: "10px", xl: "16px" }}
        boxShadow="lg"
        bgColor={bgColor}
        _placeholder={{ opacity: 0.7, color: placeholder }}
        maxLength={"50"}
      />
      <Box
        border={"2px solid"}
        borderColor={color}
        borderRadius="3xl"
        padding={{ base: "10px", xl: "16px" }}
        boxShadow="lg"
        bgColor={bgColor}
      >
        <Textarea
          value={details}
          size={["xs", "sm", "sm", "sm"]}
          resize="none"
          w={"100%"}
          h={"calc(35vh)"}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Notes"
          fontSize={"1rem"}
          focusBorderColor="transparent"
          padding={0}
          border={"none"}
          _placeholder={{ opacity: 0.7, color: placeholder }}
        />
        <Flex align={"center"} justify="space-between" marginTop={"20px"}>
          <RadioGroup onChange={setColor} value={color}>
            <Stack direction="row" id="stack">
              <Radio
                bg="blue.200"
                colorScheme="blue.200"
                value="blue.200"
                size="lg"
              ></Radio>
              <Radio
                bg="green.200"
                colorScheme="green.200"
                value="green.200"
                size="lg"
              ></Radio>
              <Radio
                bg="purple.200"
                colorScheme="purple.200"
                value="purple.200"
                size="lg"
              ></Radio>{" "}
              <Radio
                bg="red.400"
                colorScheme="red.400"
                value="red.400"
                size={"lg"}
              ></Radio>
              <Radio
                bg="yellow.300"
                colorScheme="yellow.300"
                value="yellow.300"
                size="lg"
              ></Radio>
            </Stack>
          </RadioGroup>
          <Button
            fontSize={"lg"}
            onClick={handleSubmit}
            rightIcon={<AddIcon boxSize={3} />}
            bgColor={color}
            borderRadius={"2xl"}
            size={{ base: "md", xl: "lg" }}
            textColor={textColor}
            _hover={{
              opacity: 0.6,
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
            }}
            isDisabled={header.length > 50 ? true : false}
          >
            Add
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default AddNotes;
