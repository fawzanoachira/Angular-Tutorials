import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: ['./first.component.css']
})
export class FirstComponent {
	public items: string[] = [];
	public newItem: string = "";

	constructor(private sharedService: SharedService) {
		this.items = this.sharedService.getItems();
	}

	
	setItems(){
		if(this.newItem){
			this.sharedService.setItem(this.newItem);
		}
	}
}
