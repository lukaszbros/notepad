import React from 'react';
import { Note } from './entity/Note';

import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';

export interface NoteItemProps {
  note: Note;
  remove: () => void
}

export const NoteItem:React.FunctionComponent<NoteItemProps> = ({remove, note}) => {
 return (
  <li>
    <Link to={`/note/${note.id}`}>
      <ReactMarkdown>{note.text}</ReactMarkdown>
    </Link>
    <button onClick={remove}></button>
  </li>)
}