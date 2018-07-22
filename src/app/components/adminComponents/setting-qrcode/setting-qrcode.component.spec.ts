import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingQrcodeComponent } from './setting-qrcode.component';

describe('SettingQrcodeComponent', () => {
  let component: SettingQrcodeComponent;
  let fixture: ComponentFixture<SettingQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
