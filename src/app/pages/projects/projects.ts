import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';

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
  imports: [SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
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
