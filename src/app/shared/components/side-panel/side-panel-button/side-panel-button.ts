import { Component, input } from '@angular/core';

import { SidePanelNavigator } from '../../../../core/enums/SidePanelNavigator';
import { NavigationPoint } from '../../../../core/interfaces/NavigationPoint';

@Component({
  selector: 'app-side-panel-button',
  imports: [],
  templateUrl: './side-panel-button.html',
  styleUrl: './side-panel-button.css',
})
export class SidePanelButton {
  public navigationPoint = input.required<NavigationPoint>();
  protected SidePanelNavigator = SidePanelNavigator;
}
