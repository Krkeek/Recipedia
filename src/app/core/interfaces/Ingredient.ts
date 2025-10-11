import { Unit } from '../enums/Unit';

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: Unit;
  category?: string;
  notes?: string;
}
