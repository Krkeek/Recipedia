export interface PreparationStep {
  id: string;
  title: string;
  description: string;
  order: number;
  imageUrl?: string;
  videoUrl?: string;
  duration?: number;
  equipment?: string[];
  ingredientsUsed?: string[];
}
