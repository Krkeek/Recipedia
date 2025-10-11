import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { NAVIGATION_POINTS } from '../../../core/constants/NAVIGATION_POINTS';

import { SidePanelButton } from './side-panel-button/side-panel-button';

@Component({
  selector: 'app-side-panel',
  imports: [SidePanelButton, NgOptimizedImage],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css',
  standalone: true,
})
export class SidePanel {
  protected NAVIGATION_POINTS = NAVIGATION_POINTS;
}
