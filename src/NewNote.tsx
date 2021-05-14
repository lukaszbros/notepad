import React, { useState } from 'react';
import { Note } from './entity/Note';

export interface NewNoteProps{
  addNote: (newNote: Note) => void
}

export const NewNote:React.FunctionComponent<NewNoteProps> = ({addNote}) => {  
  const [text, setText] = useState<string>("");

  return (
    <div>
      <div>Note</div>
      <textarea placeholder="Note text" onChange={event => setText(event.target.value)}></textarea>
      <button onClick={() => addNote({text: text, date: new Date()})}>Add Note</button>
    </div>
  )
}