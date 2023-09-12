import React, { useRef, useState } from "react";
import {
  FormControl,
  Input,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { editNotes } from "../../redux/notesSlice";

function EditModals({ item, isOpen, onClose }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();

  const [header, setHeader] = useState(item.header);
  const [details, setDetails] = useState(item.details);
  const [color, setColor] = useState(item.color);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setHeader(e.target.value);
    console.log(header.length);
    if (header.length >= 50) {
      toast({
        title: "Error",
        description: "The title can be a maximum of 50 characters.",
        status: "error",
        duration: 3000,
        isClosable: "true",
      });
    }
    if (header.length < 3) {
      toast({
        title: "Error",
        description: "The title must be a minimum of 3 characters.",
        status: "error",
        duration: 3000,
        isClosable: "true",
      });
    }
  };
  const handleSubmit = () => {
    dispatch(editNotes({ id: item.id, header, details, color }));
    toast({
      description: "The changes are saved.",
      status: "success",
      isClosable: true,
      position: "top",
    });
    onClose();
  };

  const bgColor = useColorModeValue("yellow.50", "gray.800");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={finalRef}
      initialFocusRef={initialRef}
      size={{ base: "sm", sm: "md", md: "xl" }}
    >
      <ModalOverlay />
      <ModalContent>
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
          <ModalHeader>Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl w={"100%"}>
              <Input
                value={header}
                ref={initialRef}
                onChange={handleInputChange}
                focusBorderColor={color}
                borderColor={color}
                fontSize={{ base: "0.90rem", md: "1rem" }}
                borderRadius="2xl"
                borderWidth={"2px"}
                marginBottom="15px"
                maxLength={"51"}
              />
              <Box
                border={"2px solid"}
                borderColor={color}
                borderRadius="2xl"
                padding={"1rem"}
                focusBorderColor="gray.800"
                boxShadow="lg"
              >
                <Textarea
                  value={details}
                  size={"sm"}
                  resize="none"
                  onChange={(e) => setDetails(e.target.value)}
                  height={"xs"}
                  fontSize={{ base: "0.90rem", md: "1rem" }}
                  focusBorderColor="transparent"
                  padding={0}
                  border={"none"}
                />
                <RadioGroup onChange={setColor} value={color}>
                  <Stack direction="row" id="stack">
                    <Radio
                      bg="red.400"
                      colorScheme="red.400"
                      value="red.400"
                      size={"lg"}
                    ></Radio>
                    <Radio
                      bg="purple.200"
                      colorScheme="purple.200"
                      value="purple.200"
                      size="lg"
                    ></Radio>
                    <Radio
                      bg="yellow.300"
                      colorScheme="yellow.300"
                      value="yellow.300"
                      size="lg"
                    ></Radio>
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
                  </Stack>
                </RadioGroup>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"teal.500"}
              color={"white"}
              mr={3}
              onClick={handleSubmit}
              isDisabled={
                header.length > 50 || header.length < 3 ? true : false
              }
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default EditModals;
