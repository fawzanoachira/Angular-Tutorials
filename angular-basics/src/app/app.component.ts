import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  public name:string = "fawzan";
  age:number = 25;

  backgroundColor:string = "cyan";
  buttonName:string = "register";
  placeHolder:string = "Enter the name";
}
