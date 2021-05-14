import React, { useState } from 'react';
import { Note } from './entity/Note';

export interface NoteItemProps {
  note: Note;
}

export const NoteItem:React.FunctionComponent<NoteItemProps> = ({note}) => {
 return (<li>{note.text}</li>)
}