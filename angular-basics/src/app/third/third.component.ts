import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  public user = {
    "name": undefined,
    "email": undefined,
  }

  onSubmit(formdata: any): any {
    this.submittedData = formdata;
  }

  submittedData: any = null;
}
