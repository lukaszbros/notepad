import { Actions } from "./Actions";

export const NoteReducer = (state, action) => {
  switch (action.type) {
      case Actions.ADD_NOTE:
          return {
              ...state,
              notes: [action.payload, ...state.notes]
          };
      case Actions.REMOVE_NOTE:
          console.log("remove")
          return {
              ...state,
              notes: state.notes.filter(note => note.id !== action.payload.id)
          };
      default:
          return state;
  }
};