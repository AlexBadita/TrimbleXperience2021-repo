import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteBgColor } from '../models/note-bg-color';
import { NoteService } from '../services/note.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges{
  notes: Note[];
  @Input() selectedCategoryId: string;

  @Input() selectedInputSearch: string;

  notesBgColors: NoteBgColor[] = this.noteService.getBgColors();

  //constructor(private router: Router) { }
  constructor(private noteService: NoteService){}

  ngOnInit(): void {
    this.noteService.serviceCall();
    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(): void {
    if(this.selectedCategoryId){
      this.notes = this.noteService.getFiltredNotes(this.selectedCategoryId);
    }
    if(this.selectedInputSearch){
      this.notes = this.noteService.getSearchedNotes(this.selectedInputSearch);
    }
  }

  /*
  showNote(note: any): void {
    this.router.navigate(['/addnote'], {queryParams: {title: note.title, description: note.description}});
  }
  */

  getBgColorByNoteId(noteId: string){
    return this.notesBgColors.filter(bgColor => bgColor.noteId === noteId)[0].bgColor;
  }
}
