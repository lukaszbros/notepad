import React, { useContext } from 'react';
import { Note } from './entity/Note';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import { Context } from './entity/Store';
import { ActionButton, Container } from './StyledComponets';
import { Actions } from './entity/Actions';

export interface NoteItemProps {
  note: Note;
}

export const NoteItem:React.FC<NoteItemProps> = ({note}) => {
  const [state, dispatch] = useContext(Context);
  const PREVIEW_LENGTH = 365;

  return (
    <Container backgroundColor="#EAEAEA" style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
      <ReactMarkdown>{note.text.length > 365 ? `${note.text.substring(0, 365)}...` : note.text}</ReactMarkdown>
      <Link to={`/note/${note.id}`} style={{color: '#787878', textDecoration: 'none'}}>
        {note.date}
      </Link>
      </div>
      <Container style={{whiteSpace: 'nowrap', display: 'flex', alignItems: 'center'}}>
        <ActionButton backgroundColor="#EC5752" color="#FCFCFC" onClick={() => dispatch({type: Actions.REMOVE_NOTE, payload: note})}>Delete note</ActionButton>
      </Container>
    </Container>
  )
}