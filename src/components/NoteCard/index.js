import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Text,
  useColorModeValue,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { destroy } from "../../redux/notesSlice";
import { useDispatch } from "react-redux";
import EditModals from "../EditModals";

function NoteCard({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const bg = useColorModeValue(item.color, "gray.800");
  const color = useColorModeValue("gray.800", "white");
  const dividerColor = useColorModeValue("white", item.color);
  const borderColor = useColorModeValue("none", item.color);
  const border = useColorModeValue("none", "4px");
  const deleteColor = useColorModeValue("blackAlpha.700", "whiteAlpha.800");

  return (
    <>
      <Card
        mb={"4"}
        key={item.id}
        maxW="sm"
        bg={bg}
        item={item}
        height={{ base: "280px", sm: "300px", md: "350px" }}
        marginBottom="0"
        width="100%"
        borderRadius="3xl"
        paddingX={"8px"}
        paddingY={"15px"}
        textColor={color}
        border={border}
        borderColor={borderColor}
        _hover={{ height: "370px", transition: "all 1s ease" }}
        cursor={"pointer"}
      >
        <CardHeader
          paddingRight="5px"
          height={"50px"}
          textAlign={"start"}
          display={"flex"}
          justifyContent={"space-between"}
          paddingY={0}
        >
          <Box
            fontSize="md"
            textAlign={"start"}
            fontWeight={"bold"}
            paddingRight={"25px"}
            noOfLines={[1, 2]}
          >
            {item.header}
          </Box>
          <CloseIcon
            w={3}
            h={3}
            color={deleteColor}
            size="md"
            margin={"6px"}
            onClick={() => dispatch(destroy(item.id))}
          />
        </CardHeader>
        <Divider color={dividerColor} marginBottom={"12px"} />
        <CardBody
          overflowY={"scroll"}
          sx={{
            "::-webkit-scrollbar": {
              width: "0",
            },
            scrollbarWidth: "none",
          }}
          paddingY="5px"
        >
          <Text fontSize={"sm"}>{item.details}</Text>
        </CardBody>
        <Flex
          align={"center"}
          ç
          justify={"space-between"}
          paddingX={"10px"}
          marginBottom={"5px"}
          marginTop={"10px"}
        >
          <Text textAlign={"start"}>
            {new Date(item.date).toLocaleDateString("en-US")}
          </Text>

          <EditIcon onClick={onOpen} />
        </Flex>
        <EditModals item={item} isOpen={isOpen} onClose={onClose} />
      </Card>
    </>
  );
}

export default NoteCard;
