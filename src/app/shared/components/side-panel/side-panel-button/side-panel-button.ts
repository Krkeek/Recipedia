import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidePanelNavigator } from '../../../../core/enums/SidePanelNavigator';
import { NavigationPoint } from '../../../../core/interfaces/NavigationPoint';

@Component({
  selector: 'app-side-panel-button',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-panel-button.html',
  styleUrl: './side-panel-button.css',
})
export class SidePanelButton {
  public navigationPoint = input.required<NavigationPoint>();
  protected SidePanelNavigator = SidePanelNavigator;
}
