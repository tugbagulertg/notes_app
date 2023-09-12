import { createSlice, nanoid } from "@reduxjs/toolkit";
import notesJson from "../notes.json";

const data = notesJson.notes;

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : data,
    filtered: "",
    colors: "",
    currentNote: [],
    searchMethod: "",
    sortMethod: "",
    radioColor: "",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("notes", JSON.stringify(state.items));
        console.log(state.items);
      },
      prepare: ({ header, details, color, date }) => {
        return {
          payload: {
            id: nanoid(),
            header,
            details,
            color,
            date,
          },
        };
      },
    },
    searchNote: (state, action) => {
      state.filtered = action.payload;
    },
    sortByColors: (state, action) => {
      state.sortMethod = action.payload;
    },
    findSearchMethods: (state, action) => {
      state.searchMethod = action.payload;
    },
    findColor: (state, action) => {
      // to list by color
      state.colors = action.payload;
    },
    destroy: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    catchRadioColor: (state, action) => {
      // to change the border colors
      state.radioColor = action.payload;
    },
    editNotes: {
      reducer: (state, action) => {
        const note = state.items.find((item) => item.id === action.payload.id);
        action.payload.header && (note.header = action.payload.header);

        action.payload.details && (note.details = action.payload.details);

        action.payload.color && (note.color = action.payload.color);

        localStorage.setItem("notes", JSON.stringify(state.items));
        return state;
      },
      prepare: ({ id, header, details, color }) => {
        return {
          payload: {
            id,
            header,
            details,
            color,
          },
        };
      },
    },
  },
});

export const {
  addNote,
  searchNote,
  findSearchMethods,
  findColor,
  destroy,
  onClickNote,
  editNotes,
  sortByColors,
  catchRadioColor,
} = notesSlice.actions;
export default notesSlice.reducer;
