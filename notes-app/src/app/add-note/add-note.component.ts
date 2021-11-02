import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { FiltersService } from '../services/filters.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title: string;
  description: string;
  selectedCategory: string;

  categories: Category[];

  constructor(private _activatedRoute: ActivatedRoute, private noteService: NoteService, private filtersService: FiltersService, private router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.title = params["title"];
      this.description = params["description"];
    });
    this.categories = this.filtersService.getCategories();
  }

  clickAddNote(){
    this.noteService
      .addNote(this.title, this.description, this.selectedCategory)
      .subscribe(() => this.router.navigateByUrl(''));
  }
}
