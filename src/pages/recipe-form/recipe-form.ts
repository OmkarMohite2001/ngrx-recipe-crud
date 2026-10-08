import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  imports: [FormsModule,RouterLink],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.scss',
})
export class RecipeForm {
  
  isEditMode = false;

  recipe = {
    name: '',
    cuisine: '',
    difficulty: 'Easy',
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    calories: 0,
    ingredients: '',
    instructions: ''
  };


}
