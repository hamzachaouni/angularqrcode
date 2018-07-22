import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSocialMediaLinkComponent } from './form-social-media-link.component';

describe('FormSocialMediaLinkComponent', () => {
  let component: FormSocialMediaLinkComponent;
  let fixture: ComponentFixture<FormSocialMediaLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSocialMediaLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSocialMediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
