import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note';
import { NoteBgColor } from '../models/note-bg-color';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class NoteService {

  // For HTTP requests
  readonly baseUrl= "https://localhost:4200";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  // notesBgColors: NoteBgColor[];

  // Dependency injection
  constructor(private router: Router, private httpClient: HttpClient) { }

  // Method for returning the notes using GET request
  getNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions);
  }

  // Method for adding notes
  addNote(title: string, description: string, categoryId: string){
    // Creating new Note object
    let note: Note = {
      title: title,
      description: description,
      categoryId: categoryId
    }

    // Setting background color for new note
    // this.notesBgColors.push({
    //   noteId: newNote.id,
    //   bgColor: this.setBackgoundColor()
    // });

    // Go to home
    this.router.navigateByUrl('');

    // Adding new note using POST request
    return this.httpClient.post(this.baseUrl+"/note", note, this.httpOptions).subscribe();
  }

  // Method for getting notes filtred by a specific category using GET request
  getFiltredNotes(categoryId: string): Observable<Note[]>{
    return this.httpClient
    .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
    .pipe(
      map((notes) => notes.filter((note) => note.categoryId === categoryId))
    );
  }

  // Method for getting notes that contains a specific string using GET request
  getSearchedNotes(inputSearch: string):Observable<Note[]>{
    return this.httpClient
    .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
    .pipe(
      map((notes) => notes.filter((note) => note.title.toLowerCase().includes(inputSearch.toLowerCase()) || 
                                            note.description.toLowerCase().includes(inputSearch.toLowerCase())))
    );
  }

  // Method for deleting a note using DELETE request
  deleteNote(noteId: string){
    return this.httpClient.delete(this.baseUrl + "/note/" + noteId).subscribe();
  }

  // TO DO: Implement Random Bg Color For Notes
  // setBackgoundColor(): string{
  //   // generate random rgb format color
  //   return "rgb(" + this.getRandomNumber() + "," + this.getRandomNumber() + "," + this.getRandomNumber() + ")";
  // }

  // getRandomNumber(): number{
  //   // return random number in range 0 - 255
  //   return Math.floor(Math.random() * 256);
  // }
}
