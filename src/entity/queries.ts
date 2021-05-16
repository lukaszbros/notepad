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