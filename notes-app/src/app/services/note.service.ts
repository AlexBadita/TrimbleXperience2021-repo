import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteBgColor } from '../models/note-bg-color';
import { Note } from '../note/note';
import { map } from "rxjs/operators";

@Injectable()
export class NoteService {

  readonly baseUrl= "https://localhost:4200";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  notesBgColors: NoteBgColor[] = [];

  constructor(private router: Router, private httpClient: HttpClient) {}

  serviceCall() {
    console.log("Note service was called");
  }  

  getNotes():Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions);
  }

  addNote(title: string, description: string, categoryId: string){
    // let newNote = {
    //   id: "Id" + idIndex,
    //   title: title,
    //   description: description,
    //   categoryId: categoryId
    // };
    //this.notes.push(newNote);

    // this.notesBgColors.push({
    //   noteId: newNote.id,
    //   bgColor: this.setBackgoundColor()
    // });

    let note: Note = {
      title: title,
      description: description,
      categoryId: categoryId
    }
    this.router.navigateByUrl('');

    return  this.httpClient.post(this.baseUrl+"/note", note, this.httpOptions).subscribe();
  }

  getFiltredNotes(categoryId: string):Observable<Note[]>{
    return this.httpClient
    .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
    .pipe(
      map((notes) => notes.filter((note) => note.categoryId === categoryId))
    );
    //return this.notes.filter(note => note.categoryId === categoryId);
  }

  getSearchedNotes(inputSearch: string):Observable<Note[]>{
    return this.httpClient
    .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
    .pipe(
      map((notes) => notes.filter((note) => note.title.toLowerCase().includes(inputSearch.toLowerCase()) || 
                                            note.description.toLowerCase().includes(inputSearch.toLowerCase())))
    );
    /*
    return this.notes.filter(note => note.title.toLowerCase().includes(inputSearch.toLowerCase()) || 
                                     note.description.toLowerCase().includes(inputSearch.toLowerCase()));
    */
  }

  deleteNote(noteId: string){
    return this.httpClient.delete(this.baseUrl + "/note/" + noteId).subscribe();
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
