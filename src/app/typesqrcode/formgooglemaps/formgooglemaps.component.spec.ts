import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgooglemapsComponent } from './formgooglemaps.component';

describe('FormgooglemapsComponent', () => {
  let component: FormgooglemapsComponent;
  let fixture: ComponentFixture<FormgooglemapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormgooglemapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgooglemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
