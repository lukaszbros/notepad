import React, { useContext } from 'react';
import { Note } from './entity/Note';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import { Context } from './entity/Store';
import { ActionButton, Container } from './StyledComponets';

export interface NoteItemProps {
  note: Note;
}

export const NoteItem:React.FC<NoteItemProps> = ({note}) => {
  const [state, dispatch] = useContext(Context);

  return (
    <li>
      <Container backgroundColor="#EAEAEA">
        <ReactMarkdown>{note.text}</ReactMarkdown>
        <Link to={`/note/${note.id}`}>
          {note.date.toLocaleDateString()}
        </Link>
        <ActionButton backgroundColor="#EC5752" onClick={() => dispatch({type: 'REMOVE_NOTE', payload: note})}>Delete note</ActionButton>
      </Container>
    </li>
  )
}