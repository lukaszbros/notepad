import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
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
      dispatch({type: 'REMOVE_NOTE', payload: note});
      history.push('/');
    }
  }

  return (                          
    <div><Link to='/'><ActionButton backgroundColor="#E5E5E5">Go back</ActionButton></Link> <ActionButton backgroundColor="#EC5752" onClick={deleteNote}>Delete note</ActionButton>
      {note && 
        <Container backgroundColor="#EAEAEA">{note.text}
          <div>{note.date.toLocaleDateString()}</div> 
        </Container>     
      }
    </div>
  )
}