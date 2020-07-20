import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    private ingredients: Array<Ingredient> = [
        new Ingredient("apple", 5),
        new Ingredient("tomato", 10)
    ];

    ingredientChanged = new EventEmitter<Array<Ingredient>>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addToShoppingList(ingredientsAdded: Array<Ingredient>) {
        this.ingredients.push(...ingredientsAdded);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}
