import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadsComponent } from './dowloads.component';

describe('DowloadsComponent', () => {
  let component: DowloadsComponent;
  let fixture: ComponentFixture<DowloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
