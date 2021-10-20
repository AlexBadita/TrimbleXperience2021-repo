import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryId: string;
  inputSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

  reciveSearch(searchInp: string){
    this.inputSearch = searchInp;
    this.categoryId = "";
  }

  reciveCategory(categId: string){
    this.categoryId = categId;
    this.inputSearch = "";
  }
}
