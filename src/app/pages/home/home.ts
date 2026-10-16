import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapArrowDown, bootstrapInfoCircle } from '@ng-icons/bootstrap-icons';

import {
  diPostgresqlOriginal,
  diAngularOriginal,
  diReactOriginal,
  diDotNetOriginal,
  diCsharpOriginal,
} from '@ng-icons/devicon/original';
export interface Technology {
  name: string;
  iconName: string;
}

@Component({
  selector: 'app-home',
  imports: [Navbar, NgIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [
    provideIcons({
      diAngularOriginal,
      diReactOriginal,
      diPostgresqlOriginal,
      diDotNetOriginal,
      diCsharpOriginal,
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapArrowDown,
      bootstrapInfoCircle,
    }),
  ],
})
export class Home {
  readonly technologies: Technology[] = [
    {
      name: 'Angular',
      iconName: 'diAngularOriginal',
    },
    {
      name: '.NET',
      iconName: 'diDotNetOriginal',
    },
    {
      name: 'React',
      iconName: 'diReactOriginal',
    },

    {
      name: 'C#',
      iconName: 'diCsharpOriginal',
    },

    {
      name: 'PostgreSQL',
      iconName: 'diPostgresqlOriginal',
    },
  ];
}
