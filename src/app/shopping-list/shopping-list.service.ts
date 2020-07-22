import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ingredients: Array<Ingredient> = [
    new Ingredient('apple', 5),
    new Ingredient('tomato', 10),
  ];

  ingredientChanged = new Subject<Array<Ingredient>>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addToShoppingList(ingredientsAdded: Array<Ingredient>) {
    this.ingredients.push(...ingredientsAdded);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
