import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_NOTES } from './entity/queries';
import { NoteItem } from './NoteItem';
import { Container, List, ListItem } from './StyledComponets';

export default function Notes() {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return (<Container center={true}><h1>Loading...</h1></Container>);
  if (error) return (<Container center={true}><h1>Error! {error.message}</h1></Container>);

  return (
    <div>
      <Container center={true}>
      <h1>Last notes</h1>
      {data.notes.length === 0 
        && <h4>You currently do not have any notes. Please add a new one.</h4>
      }
      </Container>
      <List>
        {data.notes.map( note => 
            <ListItem key={note.id}>
              <NoteItem  note={note}/>
            </ListItem>
          )
        }              
      </List>
    </div>
  )
}