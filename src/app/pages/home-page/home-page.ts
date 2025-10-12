import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidePanel } from '../../shared/components/side-panel/side-panel';

@Component({
  selector: 'app-home-page',
  imports: [SidePanel, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
