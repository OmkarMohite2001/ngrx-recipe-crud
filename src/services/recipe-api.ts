import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recipe } from '../pages/interfaces/recipe';
import { RecipeResponse } from '../pages/interfaces/recipe-response';

@Injectable({
  providedIn: 'root',
})
export class RecipeApi {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://dummyjson.com';

  //Get ALL

  getRecipes(limit = 30, skip = 0) {
    return this.http.get<RecipeResponse>(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }

  // GET BY ID

  getRecipeById(id: number) {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  // SEARCH

  searchRecipes(query: string) {
    return this.http.get<RecipeResponse>(`${this.apiUrl}/search?q=${query}`);
  }

  // CREATE

  createRecipe(recipe: Partial<Recipe>) {
    return this.http.post<Recipe>(`${this.apiUrl}/add`, recipe);
  }

  // UPDATE

  updateRecipe(id: number, recipe: Partial<Recipe>) {
    return this.http.put<Recipe>(`${this.apiUrl}/${id}`, recipe);
  }

  // DELETE

  deleteRecipe(id: number) {
    return this.http.delete<Recipe>(`${this.apiUrl}/${id}`);
  }
}
