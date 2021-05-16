import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query getNotes {
    notes {
      id
      text
      date
    }
  }`;

export const GET_NOTE = gql`
  query getNote($id: String) {
    note(id: $id) {
      id
      text
      date
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($text: String!) {
    addNote(text: $text) {
      id
      text
      date
    }
  }
`;

export const addNoteCacheRefresh = {
  update(cache, { data: { addNote } }) {
    cache.modify({
      fields: {
        notes(existingNotes = []) {
          const newNoteRef = cache.writeFragment({
            data: addNote,
            fragment: gql`
              fragment NewNote on Note {
                id
                text
                date
              }
            `
          });
          return [newNoteRef, ...existingNotes, ];
        }
      }
    });
  }
}

export const DELETE_NOTE = gql`
  mutation deleteNote($id: String!) {
    deleteNote(id: $id) {
      id
      text
      date
    }
  }
`;

export const deleteNoteCacheRefresh = {
  update(cache, { data: { deleteNote } }) {
    cache.modify({
      fields: {
        notes(existingNotes = []) {
          const newNotes = existingNotes.filter(note => note.__ref !== `Note:${deleteNote.id}`);
          return newNotes;
        }
      }
    });
  }
}