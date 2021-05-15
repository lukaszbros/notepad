import React, { useContext, useState } from 'react';
import { Note } from './entity/Note';
import { Context } from './entity/Store';
import { ActionButton } from './StyledComponets';

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
      <div>Note</div>
      <textarea placeholder="Note text" onChange={event => setText(event.target.value)} value={text}></textarea>
      <ActionButton onClick={createNote}>Add Note</ActionButton>
    </div>
  )
}