import { SidePanelNavigator } from '../enums/SidePanelNavigator';
import { NavigationPoint } from '../interfaces/NavigationPoint';

export const NAVIGATION_POINTS: NavigationPoint[] = [
  {
    label: SidePanelNavigator.Explore,
    iconName: 'chef_hat',
    disabled: false,
  },
  {
    label: SidePanelNavigator.MyRecipes,
    iconName: 'bakery_dining',
    disabled: false,
  },

  {
    label: SidePanelNavigator.Settings,
    iconName: 'settings',
    disabled: false,
  },

  {
    label: SidePanelNavigator.NutrientSearch,
    iconName: 'nutrition',
    disabled: false,
  },
  {
    label: SidePanelNavigator.MealPlanner,
    iconName: 'calendar_meal',
    disabled: false,
  },
  {
    label: SidePanelNavigator.Favorites,
    iconName: 'favorite',
    disabled: false,
  },
  {
    label: SidePanelNavigator.MyAccount,
    iconName: 'account_circle',
    disabled: false,
  },
];
