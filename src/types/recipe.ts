import { TIngredient } from "./ingredient";

export type TRecipe = {
  name: string;
  ingredients: TIngredient[];
  steps: string[];
};
