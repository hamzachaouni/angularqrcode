import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaypalComponent } from './form-paypal.component';

describe('FormPaypalComponent', () => {
  let component: FormPaypalComponent;
  let fixture: ComponentFixture<FormPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
