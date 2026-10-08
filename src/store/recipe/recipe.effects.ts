import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { RecipeApi } from '../../services/recipe-api';

import * as RecipeActions from './recipe.actions';

@Injectable()
export class RecipeEffects {
  private readonly actions$ = inject(Actions);

  private readonly recipeApi = inject(RecipeApi);

  // ================= LOAD RECIPES =================

  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadRecipes),

      switchMap(({ limit, skip }) =>
        this.recipeApi
          .getRecipes(limit, skip)

          .pipe(
            map((response) =>
              RecipeActions.loadRecipesSuccess({
                recipes: response.recipes,

                total: response.total,
              }),
            ),

            catchError((error) =>
              of(
                RecipeActions.loadRecipesFailure({
                  error: error?.message ?? 'Failed to load recipes',
                }),
              ),
            ),
          ),
      ),
    ),
  );

  // ================= LOAD SINGLE =================

  loadRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadRecipe),

      switchMap(({ id }) =>
        this.recipeApi
          .getRecipeById(id)

          .pipe(
            map((recipe) =>
              RecipeActions.loadRecipeSuccess({
                recipe,
              }),
            ),

            catchError((error) =>
              of(
                RecipeActions.loadRecipeFailure({
                  error: error?.message ?? 'Failed to load recipe',
                }),
              ),
            ),
          ),
      ),
    ),
  );

  // ================= ADD =================

  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.addRecipe),

      switchMap(({ recipe }) =>
        this.recipeApi
          .createRecipe(recipe)

          .pipe(
            map((createdRecipe) =>
              RecipeActions.addRecipeSuccess({
                recipe: createdRecipe,
              }),
            ),

            catchError((error) =>
              of(
                RecipeActions.addRecipeFailure({
                  error: error?.message ?? 'Failed to add recipe',
                }),
              ),
            ),
          ),
      ),
    ),
  );

  // ================= UPDATE =================

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.updateRecipe),

      switchMap(({ id, recipe }) =>
        this.recipeApi
          .updateRecipe(id, recipe)

          .pipe(
            map((updatedRecipe) =>
              RecipeActions.updateRecipeSuccess({
                recipe: updatedRecipe,
              }),
            ),

            catchError((error) =>
              of(
                RecipeActions.updateRecipeFailure({
                  error: error?.message ?? 'Failed to update recipe',
                }),
              ),
            ),
          ),
      ),
    ),
  );

  // ================= DELETE =================

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.deleteRecipe),

      switchMap(({ id }) =>
        this.recipeApi
          .deleteRecipe(id)

          .pipe(
            map(() =>
              RecipeActions.deleteRecipeSuccess({
                id,
              }),
            ),

            catchError((error) =>
              of(
                RecipeActions.deleteRecipeFailure({
                  error: error?.message ?? 'Failed to delete recipe',
                }),
              ),
            ),
          ),
      ),
    ),
  );
}
