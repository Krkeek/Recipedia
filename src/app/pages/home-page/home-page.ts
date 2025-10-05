import { Component } from '@angular/core';

import { Explorer } from '../../shared/components/explorer/explorer';
import { SidePanel } from '../../shared/components/side-panel/side-panel';

@Component({
  selector: 'app-home-page',
  imports: [SidePanel, Explorer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
