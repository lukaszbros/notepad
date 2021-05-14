import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Store from './entity/Store';
import NewNote from './NewNote';
import Notes from './Notes';
import { Container } from './StyledComponets';

const initialState = {
  notes: [],
  error: null
};

export default function App() {
  return (
    <Container>
      <Container backgroudColor="#AAAAAA">Notes App</Container>
      <Container backgroudColor="#EEEEEE">
        <BrowserRouter>
          <Switch>
            <Store>
            <Route path="/note/:id">
                <div>details <Link to="/">Back</Link></div>
            </Route>
            <Route exact path="/">
                <NewNote></NewNote>
                <Notes></Notes>
            </Route>
            </Store>
          </Switch>
        </BrowserRouter>
      </Container>
    </Container>
  )
}