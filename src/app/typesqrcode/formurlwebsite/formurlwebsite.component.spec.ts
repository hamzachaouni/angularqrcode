import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormurlwebsiteComponent } from './formurlwebsite.component';

describe('FormurlwebsiteComponent', () => {
  let component: FormurlwebsiteComponent;
  let fixture: ComponentFixture<FormurlwebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormurlwebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormurlwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
