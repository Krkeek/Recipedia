import { Difficulty } from '../enums/Difficulty';
import { Tag } from '../enums/Tag';

import { Ingredient } from './Ingredient';
import { Nutrients } from './Nutrients';
import { PreparationStep } from './PreparationStep';
export interface Recipe {
  id: string;
  name: string;

  description?: string;
  cuisine: string;
  course?: string;
  servings?: number;

  tags: Tag[];
  likes: number;
  rating: number;
  ratingCount: number;
  difficulty: Difficulty;

  prepTime?: number;
  cookTime?: number;
  totalTime: number;

  ingredients: Ingredient[];
  preparation: PreparationStep[];
  equipments: string[];

  imagesUrl: string[];
  videosUrl: string[];
  nutrients?: Nutrients;

  author: string;
  createdOn: Date;
  lastUpdated: Date;
  isDeleted: boolean;
  isPublic: boolean;
  version: number;
}
