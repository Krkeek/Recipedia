import { Component } from '@angular/core';

import { SidePanelNavigator } from '../../../core/enums/SidePanelNavigator';

import { SidePanelButton } from './side-panel-button/side-panel-button';

@Component({
  selector: 'app-side-panel',
  imports: [SidePanelButton],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css',
})
export class SidePanel {
  protected readonly SidePanelNavigator = SidePanelNavigator;
}
