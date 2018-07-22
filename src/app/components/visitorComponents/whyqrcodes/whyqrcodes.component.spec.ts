import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyqrcodesComponent } from './whyqrcodes.component';

describe('WhyqrcodesComponent', () => {
  let component: WhyqrcodesComponent;
  let fixture: ComponentFixture<WhyqrcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyqrcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyqrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
