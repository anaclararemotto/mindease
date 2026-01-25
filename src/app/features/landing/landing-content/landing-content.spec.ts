import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContent } from './landing-content';

describe('LandingContent', () => {
  let component: LandingContent;
  let fixture: ComponentFixture<LandingContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
