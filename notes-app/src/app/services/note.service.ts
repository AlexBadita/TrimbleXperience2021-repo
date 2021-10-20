import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NoteBgColor } from '../models/note-bg-color';
import { Note } from '../note/note';

@Injectable()
export class NoteService {

  idIndex: number = 3;
  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "This is the description for the first note",
      categoryId: "1"
    },
    {
      id: "Id2",
      title: "Second note",
      description: "This is the description for the second note",
      categoryId: "2"
    }
  ];

  notesBgColors: NoteBgColor[] = [
    {
      noteId: "Id1",
      bgColor: this.setBackgoundColor()
    },
    {
      noteId: "Id2",
      bgColor: this.setBackgoundColor()
    }
  ];

  constructor(private router: Router) { }

  serviceCall() {
    console.log("Note service was called");
  }  

  getNotes(): Note[]{
    return this.notes;
  }

  addNote(title: string, description: string, categoryId: string){
    let newNote = {
      id: "Id"+this.idIndex,
      title: title,
      description: description,
      categoryId: categoryId
    };
    this.notes.push(newNote);
    this.idIndex += 1;

    this.notesBgColors.push({
      noteId: newNote.id,
      bgColor: this.setBackgoundColor()
    });
    
    this.router.navigateByUrl('');
    console.log(this.notes);
  }

  getFiltredNotes(categoryId: string){
    return this.notes.filter(note => note.categoryId === categoryId);
  }

  getSearchedNotes(inputSearch: string){
    return this.notes.filter(note => note.title.toLowerCase().includes(inputSearch.toLowerCase()) || 
                                     note.description.toLowerCase().includes(inputSearch.toLowerCase()));
  }

  getBgColors(){
    return this.notesBgColors;
  }

  setBackgoundColor(): string{
    // generate random rgb format color
    return "rgb(" + this.getRandomNumber() + "," + this.getRandomNumber() + "," + this.getRandomNumber() + ")";
  }

  getRandomNumber(): number{
    // return random number in range 0 - 255
    return Math.floor(Math.random() * 256);
  }
}
