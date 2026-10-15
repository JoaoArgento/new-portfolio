import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';

@Component({
  selector: 'app-about',
  imports: [SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
