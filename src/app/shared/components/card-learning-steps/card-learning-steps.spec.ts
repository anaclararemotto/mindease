import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLearningSteps } from './card-learning-steps';

describe('CardLearningSteps', () => {
  let component: CardLearningSteps;
  let fixture: ComponentFixture<CardLearningSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLearningSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLearningSteps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
