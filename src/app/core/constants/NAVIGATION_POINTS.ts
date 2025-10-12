import { SidePanelNavigator } from '../enums/SidePanelNavigator';
import { NavigationPoint } from '../interfaces/NavigationPoint';

export const NAVIGATION_POINTS: NavigationPoint[] = [
  {
    label: SidePanelNavigator.Explorer,
    iconName: 'chef_hat',
    path: 'explorer',
    disabled: false,
  },
  {
    label: SidePanelNavigator.MyRecipes,
    iconName: 'bakery_dining',
    path: 'my-recipes',
    disabled: false,
  },

  {
    label: SidePanelNavigator.Settings,
    iconName: 'settings',
    path: 'settings',
    disabled: false,
  },

  {
    label: SidePanelNavigator.NutrientSearch,
    iconName: 'nutrition',
    path: 'nutrient-search',
    disabled: false,
  },
  {
    label: SidePanelNavigator.MealPlanner,
    iconName: 'calendar_meal',
    path: 'meal-planner',
    disabled: false,
  },
  {
    label: SidePanelNavigator.Favorites,
    iconName: 'favorite',
    path: 'favorites',
    disabled: false,
  },
  {
    label: SidePanelNavigator.MyAccount,
    iconName: 'account_circle',
    path: 'my-account',
    disabled: false,
  },
];
