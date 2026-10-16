import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';
import { bootstrapArrowUpRight, bootstrapBoxArrowInUpRight } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

export interface Project {
  name: string;
  description: string;
  stack: string[];
  imageSrc: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, NgIcon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  providers: [provideIcons({ bootstrapBoxArrowInUpRight })],
})
export class Projects {
  readonly projects: Project[] = [
    {
      name: 'Banquinho',
      description: 'é um banco, o que mais seria :)',
      stack: ['Angular', 'C#'],
      imageSrc: '',
      icon: '',
      link: '',
    },

    {
      name: 'Banquinho',
      description: 'é um banco, o que mais seria :)',
      stack: ['Angular', 'C#'],
      imageSrc: '',
      icon: '',
      link: '',
    },

    {
      name: 'Banquinho',
      description: 'é um banco, o que mais seria :)',
      stack: ['Angular', 'C#'],
      imageSrc: '',
      icon: '',
      link: '',
    },
    {
      name: 'Banquinho',
      description: 'é um banco, o que mais seria :)',
      stack: ['Angular', 'C#'],
      imageSrc: '',
      icon: '',
      link: '',
    },
  ];
}
