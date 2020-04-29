import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{title}}!</h1>
            <app-survey-form-test></app-survey-form-test>`,
  styles: []
})
export class AppComponent {
  title = 'exerciseSurveyFormTests';
}
