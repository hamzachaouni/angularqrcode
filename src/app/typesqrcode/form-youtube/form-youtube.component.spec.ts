import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormYoutubeComponent } from './form-youtube.component';

describe('FormYoutubeComponent', () => {
  let component: FormYoutubeComponent;
  let fixture: ComponentFixture<FormYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
