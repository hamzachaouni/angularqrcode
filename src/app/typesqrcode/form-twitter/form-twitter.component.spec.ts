import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwitterComponent } from './form-twitter.component';

describe('FormTwitterComponent', () => {
  let component: FormTwitterComponent;
  let fixture: ComponentFixture<FormTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
