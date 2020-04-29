import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormTestComponent } from './survey-form-test.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SurveyFormTestComponent', () => {
  let component: SurveyFormTestComponent;
  let fixture: ComponentFixture<SurveyFormTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFormTestComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // to test email required and numbers allowed validation
  it('email required validation', () => {
    let emailEl = fixture.debugElement.query(By.css('input[type=email]'))
    expect(emailEl.nativeElement.required).toBeTruthy();
  });
  it('email required validation', () => {
    let emailEl = fixture.debugElement.query(By.css('input[type=email]'))
    expect(emailEl.nativeElement.pattern).toContain('0-9');
  });

  // to test states bind abbreviations
  it('state option value validation', () => {
    let stateEl = fixture.debugElement.query(By.css('option'))
    expect(stateEl.nativeElement.value).toContain('NJ' || 'NY' || 'DE' || 'PA');
  });

  // to test age min and max validation
  it('age min validation', () => {
    let ageEl = fixture.debugElement.query(By.css('input[type=number]'))
    expect(ageEl.nativeElement.min).toBe('10');
  });
  it('age max validation', () => {
    let ageEl = fixture.debugElement.query(By.css('input[type=number]'))
    expect(ageEl.nativeElement.max).toBe('100');
  });

  // to test submitted flag
  it('submitted flag value', () => {
    component.submitted = true
    fixture.detectChanges();
    expect(component.submitForm).toBeTruthy();
  });
});
