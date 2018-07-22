import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVcardProfileComponent } from './form-vcard-profile.component';

describe('FormVcardProfileComponent', () => {
  let component: FormVcardProfileComponent;
  let fixture: ComponentFixture<FormVcardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVcardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVcardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
