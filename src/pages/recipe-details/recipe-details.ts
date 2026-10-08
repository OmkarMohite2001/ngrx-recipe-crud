import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  imports: [RouterLink],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.scss',
})
export class RecipeDetails {

    recipe = {
    id: 1,
    name: 'Classic Margherita Pizza',
    cuisine: 'Italian',
    difficulty: 'Easy',
    rating: 4.8,
    reviewCount: 125,
    calories: 300,
    prepTime: 15,
    cookTime: 20,
    servings: 4,

    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',

    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Mozzarella cheese',
      'Fresh basil',
      'Olive oil'
    ],

    instructions: [
      'Prepare the pizza dough.',
      'Spread tomato sauce over the dough.',
      'Add mozzarella cheese.',
      'Bake until the crust becomes golden.',
      'Add fresh basil and serve.'
    ]
  };

  constructor(
    private route: ActivatedRoute
  ) {}


}
