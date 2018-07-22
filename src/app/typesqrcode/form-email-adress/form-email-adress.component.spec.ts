import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailAdressComponent } from './form-email-adress.component';

describe('FormEmailAdressComponent', () => {
  let component: FormEmailAdressComponent;
  let fixture: ComponentFixture<FormEmailAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmailAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmailAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
