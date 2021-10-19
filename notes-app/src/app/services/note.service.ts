import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note/note';

@Injectable()
export class NoteService {

  idIndex: number = 3;
  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "This is the description for the first note",
      category: "To Do"
    },
    {
      id: "Id2",
      title: "Second note",
      description: "This is the description for the second note",
      category: "Done"
    }
  ];

  constructor(private router: Router) { }

  serviceCall() {
    console.log("Note service was called");
  }  

  getNotes(): Note[]{
    return this.notes;
  }

  addNote(title: string, description: string, category: string){
    let newNote = {
      id: "Id"+this.idIndex,
      title: title,
      description: description,
      category: category
    };
    this.notes.push(newNote);
    this.idIndex += 1;
    this.router.navigateByUrl('');
    console.log(this.notes);
  }
}
