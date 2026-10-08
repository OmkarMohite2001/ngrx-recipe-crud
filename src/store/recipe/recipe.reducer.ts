import { createReducer, on } from '@ngrx/store';

import {
  addRecipeSuccess,
  deleteRecipeSuccess,
  loadRecipe,
  loadRecipeFailure,
  loadRecipeSuccess,
  loadRecipes,
  loadRecipesFailure,
  loadRecipesSuccess,
  updateRecipeSuccess,
} from './recipe.actions';

import { initialRecipeState } from './recipe.state';

export const recipeReducer = createReducer(
  initialRecipeState,

  // ================= LOAD =================

  on(loadRecipes, (state) => ({
    ...state,

    loading: true,

    error: null,
  })),

  on(
    loadRecipesSuccess,

    (state, { recipes, total }) => ({
      ...state,

      recipes,

      total,

      loading: false,

      error: null,
    }),
  ),

  on(
    loadRecipesFailure,

    (state, { error }) => ({
      ...state,

      loading: false,

      error,
    }),
  ),

  // ================= SINGLE RECIPE =================

  on(loadRecipe, (state) => ({
    ...state,

    loading: true,

    error: null,
  })),

  on(
    loadRecipeSuccess,

    (state, { recipe }) => ({
      ...state,

      selectedRecipe: recipe,

      loading: false,

      error: null,
    }),
  ),

  on(
    loadRecipeFailure,

    (state, { error }) => ({
      ...state,

      loading: false,

      error,
    }),
  ),

  // ================= CREATE =================

  on(
    addRecipeSuccess,

    (state, { recipe }) => ({
      ...state,

      recipes: [recipe, ...state.recipes],

      loading: false,

      error: null,
    }),
  ),

  // ================= UPDATE =================

  on(
    updateRecipeSuccess,

    (state, { recipe }) => ({
      ...state,

      recipes: state.recipes.map((existingRecipe) =>
        existingRecipe.id === recipe.id ? recipe : existingRecipe,
      ),

      selectedRecipe: recipe,

      loading: false,

      error: null,
    }),
  ),

  // ================= DELETE =================

  on(
    deleteRecipeSuccess,

    (state, { id }) => ({
      ...state,

      recipes: state.recipes.filter((recipe) => recipe.id !== id),

      loading: false,

      error: null,
    }),
  ),
);
