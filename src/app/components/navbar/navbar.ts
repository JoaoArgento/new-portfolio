import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  providers: [provideIcons({ bootstrapGithub, bootstrapLinkedin })],
})
export class Navbar {}
