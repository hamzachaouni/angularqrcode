import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormattedTextComponent } from './form-formatted-text.component';

describe('FormFormattedTextComponent', () => {
  let component: FormFormattedTextComponent;
  let fixture: ComponentFixture<FormFormattedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFormattedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormattedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
