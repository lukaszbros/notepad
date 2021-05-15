import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Store from './entity/Store';
import NewNote from './NewNote';
import NoteDetails from './NoteDetails';
import Notes from './Notes';
import { Container, NoteList } from './StyledComponets';

const initialState = {
  notes: [],
  error: null
};

export default function App() {
  return (
    <Container>
      <Container backgroundColor="#EDEEF0">Notes App</Container>
      <Container backgroundColor="#FCFCFC">
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