import { Box, Flex, Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import NoteCard from "../NoteCard";

function ListedNotes() {
  const data = useSelector((state) => state.notes.items);
  const filtered = useSelector((state) => state.notes.filtered);
  const colors = useSelector((state) => state.notes.colors);
  const searchMethod = useSelector((state) => state.notes.searchMethod);
  const sortMethod = useSelector((state) => state.notes.sortMethod);

  // Area of codes that show how to list according to filtering, color and sorting criteria.
  let filteredNotes;
  if (colors === "") {
    filteredNotes = data.filter((item) =>
      searchMethod === "content"
        ? item.details.toLowerCase().includes(filtered.toLowerCase())
        : item.header.toLowerCase().includes(filtered.toLowerCase())
    );
  } else if (filtered && colors) {
    filteredNotes = data
      .filter((item) => item.color === colors)
      .filter((item) =>
        searchMethod === "content"
          ? item.details.toLowerCase().includes(filtered.toLowerCase())
          : item.header.toLowerCase().includes(filtered.toLowerCase())
      );
  } else {
    filteredNotes = data.filter((item) => item.color === colors);
  }

  sortMethod !== ""
    ? filteredNotes.sort((a, b) => a.color.localeCompare(b.color))
    : filteredNotes.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  filteredNotes.reverse();
  // *** end

  return (
    <Box>
      {filteredNotes.length === 0 ? (
        <Flex
          fontSize={"3xl"}
          fontWeight={"semibold"}
          justify={"center"}
          align={"start"}
          color={"red"}
        >
          Oops! Note not found.
        </Flex>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={{ base: 5, lg: 5, xl: 6 }}
          paddingBottom={"250px"}
          alignItems={"center"}
          justifyItems={"center"}
        >
          {filteredNotes.map((item) => (
            <NoteCard item={item} key={item.id} />
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ListedNotes;
