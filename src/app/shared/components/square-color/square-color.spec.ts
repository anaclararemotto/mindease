import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareColor } from './square-color';

describe('SquareColor', () => {
  let component: SquareColor;
  let fixture: ComponentFixture<SquareColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
