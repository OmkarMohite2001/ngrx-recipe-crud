import { Recipe } from '../../pages/interfaces/recipe';

export interface RecipeState {
  recipes: Recipe[];

  selectedRecipe: Recipe | null;

  loading: boolean;

  error: string | null;

  total: number;
}


export const initialRecipeState: RecipeState = {

  recipes: [],

  selectedRecipe: null,

  loading: false,

  error: null,

  total: 0

};
