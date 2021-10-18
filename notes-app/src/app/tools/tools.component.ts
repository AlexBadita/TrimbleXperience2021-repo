import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNote(): void{
    //this.router.navigateByUrl('/addnote');
  }

  
  title: string = "Something";
  titleColor: string = "red";
  noteContent: string = "";

  buttonClick(): void{
    //alert("Button click")
    this.title = this.noteContent;
    //this.titleColor = "blue";
    this.noteContent = "";
  }

  bgColorInput: string = "";
  titleBgColor: string = "";

  changeBgColor(): void{
    this.titleBgColor = this.bgColorInput;
    this.bgColorInput = "";
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

  currDate = Date.now();
  
  array: string[] = ["element0", "element1", "element2", "element3", "element4", "element5"];
  dates: Date[] = [new Date("1/1/2021"), new Date("1/1/2020"), new Date("1/1/2019"), new Date("1/1/2018")];
}
