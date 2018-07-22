import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleTextComponent } from './form-simple-text.component';

describe('FormSimpleTextComponent', () => {
  let component: FormSimpleTextComponent;
  let fixture: ComponentFixture<FormSimpleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSimpleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
