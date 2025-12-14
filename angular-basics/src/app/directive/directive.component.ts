import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
    public names:string[] = ["ABC", "DEF"];

    public searched_text:string="";

    searchText(event:any){
      this.searched_text = event.target.value;
    }
}
