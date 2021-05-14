import React, { useState } from 'react';
import { Note } from './entity/Note';
import { NewNote } from './NewNote';
import { Container } from './StyledComponets';

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <div>
      <Container backgroudColor="#AAAAAA">Notes App</Container>
      <Container backgroudColor="#EEEEEE">
        <NewNote addNote={(note: Note) => setNotes(notes.concat(note))}></NewNote>
      </Container>
    </div>
  )
}