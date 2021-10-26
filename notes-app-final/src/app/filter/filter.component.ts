import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  // Store all categories from filters.service
  categories: Category[];

  // For sending user input to 'parent' (home.component)
  @Output() emitSelectedFilter = new EventEmitter<string>();

  // Set connection to filters.service
  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    // Get all categories from filters.service
    this.categories = this.filtersService.getCategories();
  }

  // Method for selecting a category
  selectFilter(categoryId: string){
    // Sends @Output to home.component
    this.emitSelectedFilter.emit(categoryId);
  }
}
