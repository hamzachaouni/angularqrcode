import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppStoreLinkComponent } from './form-app-store-link.component';

describe('FormAppStoreLinkComponent', () => {
  let component: FormAppStoreLinkComponent;
  let fixture: ComponentFixture<FormAppStoreLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAppStoreLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAppStoreLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
