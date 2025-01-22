// redux/slices/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, content: 'Note 1: Team meeting at 3 PM.' },
  { id: 2, content: 'Note 2: Project report due by end of the week.' },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const selectNotes = (state) => state.notes;

export default notesSlice.reducer;
