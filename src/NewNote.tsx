import React, { useContext, useState } from 'react';
import { Note } from './entity/Note';
import { Context } from './entity/Store';
import { ActionButton, Container } from './StyledComponets';

export default function Notes() {  
  const [text, setText] = useState<string>('');
  const [state, dispatch] = useContext(Context);

  const createNote =  () => {
    const note = new Note(text);
    dispatch({type: 'ADD_NOTE', payload: note});
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