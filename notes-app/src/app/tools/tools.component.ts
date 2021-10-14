import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title: string = "Something";
  titleColor: string = "red";
  noteContent: string = "";
  titleBgColor: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void{
    //alert("Button click")
    //this.title = "Something else";
    //this.titleColor = "blue";
    this.titleBgColor = this.noteContent;
    this.noteContent = "";
  }
}
