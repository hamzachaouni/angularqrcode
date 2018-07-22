import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleVcardComponent } from './form-simple-vcard.component';

describe('FormSimpleVcardComponent', () => {
  let component: FormSimpleVcardComponent;
  let fixture: ComponentFixture<FormSimpleVcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSimpleVcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleVcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
