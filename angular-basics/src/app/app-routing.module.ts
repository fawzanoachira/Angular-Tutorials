import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DirectiveComponent } from './directive/directive.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';

const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "directives", component: DirectiveComponent },
  { path: "second", component: SecondComponent },
  { path: "third", component: ThirdComponent },
  { path: "reactive-form", component: ReactiveFormComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
