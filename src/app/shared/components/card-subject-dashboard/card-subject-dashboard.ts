import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export type Subject =
  | 'gramatica'
  | 'literatura'
  | 'redacao'
  | 'matematica'
  | 'biologia'
  | 'historia'
  | 'geografia'
  | 'fisica'
  | 'quimica'
  | 'ingles'
  | 'espanhol';

const SUBJECT_COLORS: Record<Subject, string> = {
  gramatica: '#E1CCFF',
  literatura: '#E1CCFF',
  redacao: '#E1CCFF',
  matematica: '#D4DDF3',
  biologia: '#C2E2C7',
  historia: '#D0B6AF',
  geografia: '#B9E8DD',
  fisica: '#B0DBE0',
  quimica: '#CCD7FF',
  ingles: '#FFCCCC',
  espanhol: '#FFE5CC',
};

@Component({
  selector: 'app-card-subject-dashboard',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './card-subject-dashboard.html',
  styleUrl: './card-subject-dashboard.scss',
})
export class CardSubjectDashboard {
  @Input() label!: string;
  @Input() subject?: Subject;

  @Input() icon?: string;

  get cardBg(): string | null {
    return this.subject ? SUBJECT_COLORS[this.subject] : null;
  }
}
