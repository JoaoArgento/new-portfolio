import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';

export type StackType = 'Angular' | 'Unity' | 'React' | 'C#' | '.NET';

interface ExperienceTimelineItem {
  role: string;
  name: string;
  period: string;
  stack: StackType[];
  bulletPoints: string[];
}

@Component({
  selector: 'app-experiences-timeline',
  imports: [SectionHeader],
  templateUrl: './experiences-timeline.html',
  styleUrl: './experiences-timeline.scss',
})
export class ExperiencesTimeline {
  readonly experienceTimeline: ExperienceTimelineItem[] = [
    {
      role: 'Desenvolvedor de software',
      name: 'Integral Sistemas LTDA',
      stack: ['Angular', '.NET', 'C#'],
      bulletPoints: ['Desenvolvi X!', 'Fiz Y', 'Da forma Z'],
      period: 'Maio de 2025 - Junho de 2026',
    },

    {
      role: 'Desenvolvedor de software',
      name: 'Integral Sistemas LTDA',
      stack: ['Angular', '.NET', 'C#'],
      bulletPoints: ['Desenvolvi X!', 'Fiz Y', 'Da forma Z'],
      period: 'Maio de 2025 - Junho de 2026',
    },
    {
      role: 'Desenvolvedor de software',
      name: 'Integral Sistemas LTDA',
      stack: ['Angular', '.NET', 'C#'],
      bulletPoints: ['Desenvolvi X!', 'Fiz Y', 'Da forma Z'],
      period: 'Maio de 2025 - Junho de 2026',
    },
  ];
}
