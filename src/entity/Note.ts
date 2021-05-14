import { v4 as uuidv4 } from 'uuid';
export class Note {
  id: string;
  text: string;
  date: Date;

  constructor(text: string) {
    this.id = uuidv4();
    this.text = text;
    this.date = new Date();
  }
}