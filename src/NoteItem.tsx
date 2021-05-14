import React from 'react';
import { Note } from './entity/Note';

import ReactMarkdown from 'react-markdown'

export interface NoteItemProps {
  note: Note;
  remove: () => void
}

export const NoteItem:React.FunctionComponent<NoteItemProps> = ({remove, note}) => {
 return (
  <li>
    <ReactMarkdown>{note.text}</ReactMarkdown><button onClick={remove}></button>
  </li>)
}