import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBitcoinComponent } from './form-bitcoin.component';

describe('FormBitcoinComponent', () => {
  let component: FormBitcoinComponent;
  let fixture: ComponentFixture<FormBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
