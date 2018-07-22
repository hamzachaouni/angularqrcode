import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFacebookComponent } from './form-facebook.component';

describe('FormFacebookComponent', () => {
  let component: FormFacebookComponent;
  let fixture: ComponentFixture<FormFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
