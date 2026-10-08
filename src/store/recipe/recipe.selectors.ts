import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RecipeState } from './recipe.state';

// Feature State

export const selectRecipeState = createFeatureSelector<RecipeState>('recipes');

// Recipes

export const selectRecipes = createSelector(selectRecipeState, (state) => state.recipes);

// Selected Recipe

export const selectSelectedRecipe = createSelector(
  selectRecipeState,
  (state) => state.selectedRecipe,
);

// Loading

export const selectRecipeLoading = createSelector(selectRecipeState, (state) => state.loading);

// Error

export const selectRecipeError = createSelector(selectRecipeState, (state) => state.error);

// Total

export const selectRecipeTotal = createSelector(selectRecipeState, (state) => state.total);
