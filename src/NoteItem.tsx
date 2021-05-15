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
  const PREVIEW_LENGTH = 365;

  return (
    <Container backgroundColor="#EAEAEA" style={{display: 'flex'}}>
      <div>
      <ReactMarkdown>{note.text.length > 365 ? `${note.text.substring(0, 365)}...` : note.text}</ReactMarkdown>
      <Link to={`/note/${note.id}`} style={{color: '#787878', textDecoration: 'none'}}>
        {note.date.toLocaleDateString()}
      </Link>
      </div>
      <Container style={{whiteSpace: 'nowrap', display: 'flex', alignItems: 'center'}}>
        <ActionButton backgroundColor="#EC5752" onClick={() => dispatch({type: 'REMOVE_NOTE', payload: note})}>Delete note</ActionButton>
      </Container>
    </Container>
  )
}