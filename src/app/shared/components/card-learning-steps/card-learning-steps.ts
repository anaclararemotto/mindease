import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-learning-steps',
  imports: [],
  templateUrl: './card-learning-steps.html',
  styleUrl: './card-learning-steps.scss',
})
export class CardLearningSteps {
 @Input() number!: string;
  @Input() title!: string;
  @Input() content!: string;
}
