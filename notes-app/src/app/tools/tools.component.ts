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

  // Color changing button
  btnColor: string = "";

  changeButtonColor(): void{
    // generate random rgb format color
    this.btnColor = "rgb(" + this.getRandomNumber() + "," + this.getRandomNumber() + "," + this.getRandomNumber() + ")";
  }

  getRandomNumber(): number{
    // return random number in range 0 - 255
    return Math.floor(Math.random() * 256);
  }

  // Change class name
  className: string = "initial-class";
  inputName: string = "";

  changeClass(): void{
    this.className = this.inputName;
    this.inputName = "";
  }
}
