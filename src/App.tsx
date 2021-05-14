import React from 'react';
import NewNote from './NewNote';
import { Container } from './StyledComponets';

export default function App() {

  return (
    <div>
      <Container backgroudColor="#AAAAAA">Notes App</Container>
      <Container backgroudColor="#EEEEEE">
        <NewNote></NewNote>
      </Container>
    </div>
  )
}