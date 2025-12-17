import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent {
  public reactiveFormData = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  onSubmit(): any {
    if (this.reactiveFormData.valid) {
      this.submittedData = this.reactiveFormData.value;
    }
    console.log(this.reactiveFormData)
  }

  submittedData: any = null;
}
