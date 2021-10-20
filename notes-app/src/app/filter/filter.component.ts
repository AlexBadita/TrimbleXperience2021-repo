import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Category } from '../models/category';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[];
  @Output() emitSelectedFilter = new EventEmitter<string>();

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.categories = this.filtersService.getCategories();
  }

  selectFilter(categoryId: string){
    this.emitSelectedFilter.emit(categoryId);
  }
}
