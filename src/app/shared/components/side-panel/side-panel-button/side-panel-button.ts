import { Component, input } from '@angular/core';

@Component({
  selector: 'app-side-panel-button',
  imports: [],
  templateUrl: './side-panel-button.html',
  styleUrl: './side-panel-button.css',
})
export class SidePanelButton {
  public label = input.required();
}
