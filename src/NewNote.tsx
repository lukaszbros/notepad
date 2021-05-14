import React, { useState } from 'react';
import { Note } from './entity/Note';

export interface NewNoteProps{
  addNote: (newNote: Note) => void
}

export const NewNote:React.FunctionComponent<NewNoteProps> = ({addNote}) => {  
  const [text, setText] = useState<string>("");

  const createNote =  () => {
    const note = new Note(text);
    addNote(note);
    setText("");
  }

  return (
    <div>
      <div>Note</div>
      <textarea placeholder="Note text" onChange={event => setText(event.target.value)} value={text}></textarea>
      <button onClick={createNote}>Add Note</button>
    </div>
  )
}