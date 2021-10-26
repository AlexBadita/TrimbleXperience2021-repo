import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // For property binding
  categoryId: string;
  inputSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Event binding for reciving @Output from search.component and storing it in a local variable
  reciveSearch(searchInp: string): void{
    this.inputSearch = searchInp;
    this.categoryId = "";
  }

  // Event binding for reciving @Output from filter.component and storing it in a local variable
  reciveCategory(categId: string): void{
    this.categoryId = categId;
    this.inputSearch = "";
  }
}
