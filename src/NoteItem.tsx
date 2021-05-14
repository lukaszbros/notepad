import React, { useContext } from 'react';
import { Note } from './entity/Note';

import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import { Context } from './entity/Store';

export interface NoteItemProps {
  note: Note;
}

export const NoteItem:React.FC<NoteItemProps> = ({note}) => {
  const [state, dispatch] = useContext(Context);

  return (
    <li>
      <Link to={`/note/${note.id}`}>
        <ReactMarkdown>{note.text}</ReactMarkdown>
      </Link>
      <button onClick={() => dispatch({type: 'REMOVE_NOTE', payload: note})}></button>
    </li>
  )
}