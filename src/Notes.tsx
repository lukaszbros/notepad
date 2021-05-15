import React, { useContext } from 'react';
import { Context } from './entity/Store';
import { NoteItem } from './NoteItem';
import { NoteList } from './StyledComponets';

export default function Notes() {
  const [state] = useContext(Context);

  return (
    <div>
      <h1>Last notes</h1>
      {state.notes.length === 0 
        && <h4>You currently do not have any notes. Please add a new one.</h4>
      }
      <NoteList>
        {state.notes.map( note => 
            <NoteItem key={note.id} note={note}/>
          )
        }              
      </NoteList>
    </div>
  )
}