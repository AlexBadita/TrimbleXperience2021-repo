import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteBgColor } from '../models/note-bg-color';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {

  // Store the notes that need to be displayed
  notes: Note[];
  
  // Recive the @Output from filter.component
  @Input() selectedCategoryId: string;

  // Recive the @Output from search.component
  @Input() selectedInputSearch: string;

  // Set connection to note.service
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    // Calls method from note.service to get all notes and stores them in a local variable
    this.noteService.getNotes().subscribe(result => {
      this.notes = result;
    });
  }

  ngOnChanges(): void {
    // Get filtred notes when filter.component sends @Output by calling a method from note.service
    if(this.selectedCategoryId){
      this.noteService.getFiltredNotes(this.selectedCategoryId).subscribe(result =>{
        this.notes = result;
      });
    }
    // Get searched notes when search.component sends @Output by calling a method from note.service
    if(this.selectedInputSearch){
      this.noteService.getSearchedNotes(this.selectedInputSearch).subscribe(result =>{
        this.notes = result;
      });
    }
  }

  // Method for deleting a note
  deleteNote(noteId: string){
    // Calls a method from note.service to delete a note with a specific id
    this.noteService.deleteNote(noteId);
    // Calls method from note.service to get all notes and stores them in a local variable
    this.noteService.getNotes().subscribe(result => {
      this.notes = result;
    });
  }
}
