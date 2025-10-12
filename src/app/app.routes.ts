import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { Explorer } from './shared/components/explorer/explorer';
import { Favorites } from './shared/components/favorites/favorites';
import { MealPlanner } from './shared/components/meal-planner/meal-planner';
import { MyAccount } from './shared/components/my-account/my-account';
import { MyRecipes } from './shared/components/my-recipes/my-recipes';
import { NutrientSearch } from './shared/components/nutrient-search/nutrient-search';
import { Settings } from './shared/components/settings/settings';

export const routes: Routes = [
  {
    path: 'home-page',
    component: HomePage,
    children: [
      { path: 'explorer', component: Explorer },
      { path: 'my-recipes', component: MyRecipes },
      { path: 'nutrient-search', component: NutrientSearch },
      { path: 'meal-planner', component: MealPlanner },
      { path: 'favorites', component: Favorites },
      { path: 'my-account', component: MyAccount },
      { path: 'settings', component: Settings },
      { path: '', redirectTo: 'explorer', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home-page/explorer', pathMatch: 'full' },
  { path: '**', redirectTo: 'home-page/explorer' },
];
