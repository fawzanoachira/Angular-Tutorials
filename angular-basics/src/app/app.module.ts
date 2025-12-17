import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DirectiveComponent,
    SecondComponent,
    ThirdComponent,
    ReactiveFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
