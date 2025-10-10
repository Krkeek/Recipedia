import { SidePanelNavigator } from '../enums/SidePanelNavigator';

export interface NavigationPoint {
  label: SidePanelNavigator;
  iconName: string;
  disabled: boolean;
}
