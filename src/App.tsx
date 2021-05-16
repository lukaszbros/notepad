import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Store from './entity/Store';
import NewNote from './NewNote';
import NoteDetails from './NoteDetails';
import Notes from './Notes';
import { Container } from './StyledComponets';

export default function App() {
  const GET_NOTES = gql`
  query notes {
    notes {
      id
      text
      date
    }
  }`;
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return (<h1>Loading...</h1>);
  if (error) return (<h1>Error!{error.message}</h1>);

  return (
    <Container style={{color: '#787878'}}>
      <Container backgroundColor="#EDEEF0">Notes App</Container>
      <Container backgroundColor="#FCFCFC" style={{paddingLeft: '20%', paddingRight: '20%'}}>
        <BrowserRouter>
          <Switch>
            <Store>
            <Route path="/note/:id">
                <NoteDetails/>
            </Route>
            <Route exact path="/">
                <NewNote/>
                <Notes/>
            </Route>
            </Store>
          </Switch>
        </BrowserRouter>
      </Container>
    </Container>
  )
}
