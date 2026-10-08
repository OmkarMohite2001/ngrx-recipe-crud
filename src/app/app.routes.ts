import { Routes } from '@angular/router';
import { RecipeList } from '../pages/recipe-list/recipe-list';
import { RecipeDetails } from '../pages/recipe-details/recipe-details';
import { RecipeForm } from '../pages/recipe-form/recipe-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },

  {
    path: 'recipes',
    component: RecipeList,
  },

  {
    path: 'recipes/add',
    component: RecipeForm,
  },

  {
    path: 'recipes/:id',
    component: RecipeDetails,
  },

  {
    path: 'recipes/edit/:id',
    component: RecipeForm,
  },

  {
    path: '**',
    redirectTo: 'recipes',
  },
];
