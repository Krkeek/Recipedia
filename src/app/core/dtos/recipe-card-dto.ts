import { Difficulty } from '../enums/Difficulty';

export interface recipeCardDto {
  id: string;
  name: string;
  cuisine: string;
  totalTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  rating: number;
  ratingCount: number;
}
