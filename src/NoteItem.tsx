import React, { useState } from 'react';
import { Note } from './entity/Note';

export interface NoteItemProps {
  remove: () => void
  note: Note;
}

export const NoteItem:React.FunctionComponent<NoteItemProps> = ({remove, note}) => {
 return (<li>{note.text}<button onClick={remove}></button></li>)
}