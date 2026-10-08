import { Recipe } from "../../pages/interfaces/recipe";
import { createAction, props } from '@ngrx/store';


export const loadRecipes = createAction(
  '[Recipe List] Load Recipes',
  props<{
    limit: number;
    skip: number;
  }>(),
);

export const loadRecipesSuccess = createAction(
  '[Recipe API] Load Recipes Success',
  props<{
    recipes: Recipe[];
    total: number;
  }>(),
);

export const loadRecipesFailure = createAction(
  '[Recipe API] Load Recipes Failure',
  props<{
    error: string;
  }>(),
);

// ================= GET BY ID =================

export const loadRecipe = createAction(
  '[Recipe Details] Load Recipe',
  props<{
    id: number;
  }>(),
);

export const loadRecipeSuccess = createAction(
  '[Recipe API] Load Recipe Success',
  props<{
    recipe: Recipe;
  }>(),
);

export const loadRecipeFailure = createAction(
  '[Recipe API] Load Recipe Failure',
  props<{
    error: string;
  }>(),
);

// ================= CREATE =================

export const addRecipe = createAction(
  '[Recipe Form] Add Recipe',
  props<{
    recipe: Partial<Recipe>;
  }>(),
);

export const addRecipeSuccess = createAction(
  '[Recipe API] Add Recipe Success',
  props<{
    recipe: Recipe;
  }>(),
);

export const addRecipeFailure = createAction(
  '[Recipe API] Add Recipe Failure',
  props<{
    error: string;
  }>(),
);

// ================= UPDATE =================

export const updateRecipe = createAction(
  '[Recipe Form] Update Recipe',
  props<{
    id: number;
    recipe: Partial<Recipe>;
  }>(),
);

export const updateRecipeSuccess = createAction(
  '[Recipe API] Update Recipe Success',
  props<{
    recipe: Recipe;
  }>(),
);

export const updateRecipeFailure = createAction(
  '[Recipe API] Update Recipe Failure',
  props<{
    error: string;
  }>(),
);

// ================= DELETE =================

export const deleteRecipe = createAction(
  '[Recipe List] Delete Recipe',
  props<{
    id: number;
  }>(),
);

export const deleteRecipeSuccess = createAction(
  '[Recipe API] Delete Recipe Success',
  props<{
    id: number;
  }>(),
);

export const deleteRecipeFailure = createAction(
  '[Recipe API] Delete Recipe Failure',
  props<{
    error: string;
  }>(),
);
