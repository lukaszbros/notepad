import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Note } from './entity/Note';
import { Context } from './entity/Store';

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
    <div><button onClick={deleteNote}>Delete note</button><Link to='/'>Back</Link>
      {note && 
        <div>{note.text}</div>
      }
    </div>
  )
}