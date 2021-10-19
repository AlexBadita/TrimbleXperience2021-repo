import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[];

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.categories = this.filtersService.getCategories();
  }

}
