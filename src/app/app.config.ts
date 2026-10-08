import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { recipeReducer } from '../store/recipe/recipe.reducer';
import { RecipeEffects } from '../store/recipe/recipe.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      recipes: recipeReducer,
    }),

    provideEffects(RecipeEffects),
  ],
};
