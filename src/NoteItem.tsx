import React from 'react';
import { Note } from './entity/Note';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import { ActionButton, Container } from './StyledComponets';
import { useMutation } from '@apollo/client';
import { deleteNoteCacheRefresh, DELETE_NOTE } from './entity/queries';

export interface NoteItemProps {
  note: Note;
}

export const NoteItem:React.FC<NoteItemProps> = ({note}) => {
  const [deleteNote] = useMutation(DELETE_NOTE, deleteNoteCacheRefresh);
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
        <ActionButton backgroundColor="#EC5752" color="#FCFCFC" onClick={() => deleteNote({variables: {id: note.id}})}>Delete note</ActionButton>
      </Container>
    </Container>
  )
}