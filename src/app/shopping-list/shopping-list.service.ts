import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  // private ingredients: Array<Ingredient> = [
  //   new Ingredient('apple', 5),
  //   new Ingredient('tomato', 10),
  // ];

  private ingredients: Array<Ingredient> = [];

  ingredientChanged = new Subject<Array<Ingredient>>();
  startedEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients.slice()[id];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addToShoppingList(ingredientsAdded: Array<Ingredient>) {
    this.ingredients.push(...ingredientsAdded);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(id: number, newIngredient: Ingredient) {
    this.ingredients[id] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
