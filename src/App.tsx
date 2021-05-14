import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import { Note } from './entity/Note';
import { NewNote } from './NewNote';
import { NoteItem } from './NoteItem';
import { Container, NoteList } from './StyledComponets';

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes(notes.concat(note));
  }

  const removeNote = (id: String) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <Container>
      <Container backgroudColor="#AAAAAA">Notes App</Container>
      <Container backgroudColor="#EEEEEE">
        <BrowserRouter>
          <Switch>
            <Route path="/note/:id">
                <div>details <Link to="/">Back</Link></div>
            </Route>
            <Route exact path="/">
                <NewNote addNote={addNote}></NewNote>
                <NoteList>
                  {notes.map( note => 
                    <NoteItem key={note.id} note={note} remove={() => removeNote(note.id)}/>
                  )
                }
                </NoteList>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </Container>
  )
}