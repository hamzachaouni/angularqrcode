import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpdfComponent } from './formpdf.component';

describe('FormpdfComponent', () => {
  let component: FormpdfComponent;
  let fixture: ComponentFixture<FormpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
