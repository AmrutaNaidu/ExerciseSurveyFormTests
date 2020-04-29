import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { SurveyFormTestComponent } from './survey-form-test/survey-form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
