import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Two way data binding for the matInput fields; conected to ngModel
  inputSearch: string;

  // For displaying user input
  displaySearch: string;

  // For sending user input to 'parent' (home.component)
  @Output() emitInputSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Event binding for the Search button click
  searchString(){
    // Sends the @Output to home.component
    this.emitInputSearch.emit(this.inputSearch);
    
    this.displaySearch = this.inputSearch;
    this.inputSearch = "";
  }
}
