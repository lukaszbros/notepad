import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { Actions } from './entity/Actions';
import { Note } from './entity/Note';
import { ADD_NOTE } from './entity/queries';
import { Context } from './entity/Store';
import { ActionButton, Container } from './StyledComponets';

export default function Notes() {
  const [text, setText] = useState('');
  const [addNote] = useMutation(ADD_NOTE)

  const createNote =  () => {
    //const note = new Note(text);
    //dispatch({type: Actions.ADD_NOTE, payload: note});
    addNote({variables: {text: text}});
    setText('');
  }

  return (
    <div>
      <p><b>Note</b></p>
      <textarea rows={10} style={{width: '100%'}} placeholder="Note text" onChange={event => setText(event.target.value)} value={text}></textarea>
      <Container center={true}>
        <ActionButton onClick={createNote}>Add Note</ActionButton>
      </Container>
    </div>
  )
}

