import React, { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Actions } from './entity/Actions';
import { Note } from './entity/Note';
import { Context } from './entity/Store';
import { ActionButton, Container } from './StyledComponets';

interface NoteDetailsParams {
  id: string;
}

export default function NoteDetails() {
  const [note, setNote] = useState<Note>();
  const { id } = useParams<NoteDetailsParams>();
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const noteDetails = state.notes.find(note => note.id === id);
    setNote(noteDetails)
  });

  const deleteNote = () => {
    if (note) {
      dispatch({type: Actions.REMOVE_NOTE, payload: note});
      history.push('/');
    }
  }

  return (                          
    <div>
      <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <Link to='/'><ActionButton backgroundColor="#E5E5E5">Go back</ActionButton></Link> 
        <ActionButton backgroundColor="#EC5752" color="#FCFCFC" onClick={deleteNote}>Delete note</ActionButton>
      </Container>
      {note && 
        <Container backgroundColor="#EAEAEA">
          <ReactMarkdown>{note.text}</ReactMarkdown>
          <div style={{textAlign: 'right'}}>{note.date.toLocaleDateString()}</div>
        </Container>     
      }
    </div>
  )
}