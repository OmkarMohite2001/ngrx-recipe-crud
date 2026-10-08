import { Component, inject, OnInit, Pipe } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, pipe } from 'rxjs';

import { Recipe } from '../interfaces/recipe';

import * as RecipeActions from '../../store/recipe/recipe.actions';

import * as RecipeSelectors from '../../store/recipe/recipe.selectors';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-recipe-list',

  imports: [RouterLink,AsyncPipe],

  templateUrl: './recipe-list.html',

  styleUrl: './recipe-list.scss',
})
export class RecipeList implements OnInit {
  private readonly store = inject(Store);

  recipes$: Observable<Recipe[]> = this.store.select(RecipeSelectors.selectRecipes);

  loading$ = this.store.select(RecipeSelectors.selectRecipeLoading);

  error$ = this.store.select(RecipeSelectors.selectRecipeError);

  ngOnInit(): void {
    this.store.dispatch(
      RecipeActions.loadRecipes({
        limit: 30,

        skip: 0,
      }),
    );
  }
}
