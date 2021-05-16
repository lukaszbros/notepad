import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { addNoteCacheRefresh, ADD_NOTE } from './entity/queries';
import { ActionButton, Container } from './StyledComponets';

export default function Notes() {
  const [text, setText] = useState('');
  const [addNote] = useMutation(ADD_NOTE, addNoteCacheRefresh);

  const createNote =  () => {
    if (text) {
      addNote({variables: {text: text}});
      setText('');
    }
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

