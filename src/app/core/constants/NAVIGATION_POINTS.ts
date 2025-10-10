import { SidePanelNavigator } from '../enums/SidePanelNavigator';
import { NavigationPoint } from '../interfaces/NavigationPoint';

export const NAVIGATION_POINTS: NavigationPoint[] = [
  {
    label: SidePanelNavigator.Recipes,
    iconName: 'bakery_dining',
  },
  {
    label: SidePanelNavigator.Favorites,
    iconName: 'favorite',
  },
  {
    label: SidePanelNavigator.Settings,
    iconName: 'settings',
  },
];
