import { Component, inject, OnInit } from '@angular/core';

import { RECIPE_CARDS } from '../../../core/constants/RECIPE_CARDS';
import { RecipeService } from '../../../core/services/recipe-service';

@Component({
  selector: 'app-explorer',
  imports: [],
  templateUrl: './explorer.html',
  styleUrl: './explorer.css',
})
export class Explorer implements OnInit {
  private readonly recipeService = inject(RecipeService);

  public ngOnInit(): void {
    const recipeCards = this.recipeService.getRecipeDetails(RECIPE_CARDS[0].id);
    console.log(recipeCards);
  }
}
