import { Component } from '@angular/core';
import { Home } from '../../pages/home/home';
import { Navbar } from '../../components/navbar/navbar';
import { Projects } from '../../pages/projects/projects';
import { About } from '../../pages/about/about';
import { ExperiencesTimeline } from '../../pages/experiences-timeline/experiences-timeline';
@Component({
  selector: 'app-main-layout',
  imports: [Home, Navbar, Projects, About, ExperiencesTimeline],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
