import { Injectable } from '@angular/core';

import { RECIPE_CARDS } from '../constants/RECIPE_CARDS';
import { RECIPES } from '../constants/RECIPES';
import { recipeCardDto } from '../dtos/recipe-card-dto';
import { Recipe } from '../interfaces/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public fetchRecipeCards(): recipeCardDto[] {
    return RECIPE_CARDS;
  }

  public fetchRecipeCardById(id: string): recipeCardDto | undefined {
    return RECIPE_CARDS.find((recipeCard) => recipeCard.id === id);
  }

  public getRecipeDetails(_id: string): Recipe | undefined {
    return RECIPES.find((recipe) => recipe);
  }

  public setAsFavorite(id: string): string {
    return id;
  }
}
