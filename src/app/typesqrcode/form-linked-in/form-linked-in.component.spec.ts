import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkedInComponent } from './form-linked-in.component';

describe('FormLinkedInComponent', () => {
  let component: FormLinkedInComponent;
  let fixture: ComponentFixture<FormLinkedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLinkedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLinkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
