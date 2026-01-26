import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubjectDashboard } from './card-subject-dashboard';

describe('CardSubjectDashboard', () => {
  let component: CardSubjectDashboard;
  let fixture: ComponentFixture<CardSubjectDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubjectDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSubjectDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
