import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearch: string;
  displaySearch: string;
  @Output() emitInputSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchString(){
    this.emitInputSearch.emit(this.inputSearch);
    this.displaySearch = this.inputSearch;
    this.inputSearch = "";
  }
}
