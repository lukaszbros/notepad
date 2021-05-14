import React, { useContext } from "react";
import { Context } from "./entity/Store";
import { NoteItem } from "./NoteItem";
import { NoteList } from "./StyledComponets";

export default function Notes() {
  const [state] = useContext(Context);

  return (
    <NoteList>
      {state.notes.map( note => 
          <NoteItem key={note.id} note={note}/>
        )
      }              
    </NoteList>
  )
}