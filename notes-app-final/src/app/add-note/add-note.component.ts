import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FiltersService } from '../services/filters.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  // Two way data binding for the mat-form-field fields; conected to ngModel
  title: string;
  description: string;
  selectedCategory: string;

  // Store all categories from filters.service
  categories: Category[];

  // Set connection to note.service and filters.service 
  constructor(private noteService: NoteService, private filtersService: FiltersService) { }

  ngOnInit(): void {
    // Get all categories from filters.service
    this.categories = this.filtersService.getCategories();
  }

  // Method for submitting the form
  clickAddNote(): void{
    // Calling method from note.service
    this.noteService.addNote(this.title, this.description, this.selectedCategory);
  }
}
