import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Store from './entity/Store';
import NewNote from './NewNote';
import NoteDetails from './NoteDetails';
import Notes from './Notes';
import { Container } from './StyledComponets';

export default function App() {
  const mainContentStyle = {
    paddingLeft: '20%',
    paddingRight: '20%'
  };

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