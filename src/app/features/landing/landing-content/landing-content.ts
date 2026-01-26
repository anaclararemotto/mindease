import { Component } from '@angular/core';
import { CardLearningSteps } from "../../../shared/components/card-learning-steps/card-learning-steps";
import { SquareColor } from "../../../shared/components/square-color/square-color";
import { CardSubjectDashboard } from "../../../shared/components/card-subject-dashboard/card-subject-dashboard";
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-landing-content',
  imports: [CardLearningSteps, SquareColor, CardSubjectDashboard, LucideAngularModule],
  templateUrl: './landing-content.html',
  styleUrl: './landing-content.scss',
})
export class LandingContent {

}
