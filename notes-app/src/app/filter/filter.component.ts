import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[] = [
    {id:"1", name:"To Do"},
    {id:"2", name:"Doing"},
    {id:"3", name:"Done"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
