import React, { useState } from 'react';
import { Note } from './entity/Note';
import { NewNote } from './NewNote';
import { NoteItem } from './NoteItem';
import { Container, NoteList } from './StyledComponets';

export default function App() {
  const [notes, setNotes] = useState<Note[]>([{text: "test", date: new Date()}]);

  return (
    <div>
      <Container backgroudColor="#AAAAAA">Notes App</Container>
      <Container backgroudColor="#EEEEEE">
        <NewNote addNote={(note: Note) => setNotes(notes.concat(note))}></NewNote>
        <NoteList>
          {notes.map((note: Note) => 
            <NoteItem note={note}/>
          )
        }
        </NoteList>
      </Container>
    </div>
  )
}