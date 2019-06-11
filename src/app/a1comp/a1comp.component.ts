import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a1comp',
  template: `<input  [(ngModel)]="name" type="text"> {{name}}`,
  styles: ['']
})
export class A1compComponent implements OnInit {
  public name="";

  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value);
  }

}
