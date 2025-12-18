import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  public items: string[] = [];

  constructor(sharedService: SharedService) {
    this.items = sharedService.getItems();
  }
}
