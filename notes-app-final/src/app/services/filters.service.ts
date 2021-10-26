import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class FiltersService {

  categories: Category[] = [
    {id:"1", name:"To Do"},
    {id:"2", name:"Doing"},
    {id:"3", name:"Done"}
  ];

  constructor() { }

  // Method that returns 'categories' array
  getCategories(): Category[]{
    return this.categories;
  }
}
