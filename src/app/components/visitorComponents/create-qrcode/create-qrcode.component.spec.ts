import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQrcodeComponent } from './create-qrcode.component';

describe('CreateQrcodeComponent', () => {
  let component: CreateQrcodeComponent;
  let fixture: ComponentFixture<CreateQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
