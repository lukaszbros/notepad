import React, { useContext } from 'react';
import { Context } from './entity/Store';
import { NoteItem } from './NoteItem';
import { Container, List, ListItem } from './StyledComponets';

export default function Notes() {
  const [state] = useContext(Context);

  return (
    <div>
      <Container center={true}>
      <h1>Last notes</h1>
      {state.notes.length === 0 
        && <h4>You currently do not have any notes. Please add a new one.</h4>
      }
      </Container>
      <List>
        {state.notes.map( note => 
            <ListItem key={note.id}>
              <NoteItem  note={note}/>
            </ListItem>
          )
        }              
      </List>
    </div>
  )
}