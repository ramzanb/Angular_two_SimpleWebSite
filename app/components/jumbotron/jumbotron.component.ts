import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron', 
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtUrl:string;

  constructor(){
    this.jbtHeading = "Hello World";
    this.jbtText = "This is a somple text";
    this.jbtBtnText = "Read more";
    this.jbtUrl = "/about";
  }

 }
