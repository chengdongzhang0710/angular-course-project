import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Array<Ingredient>;
  ingredientChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangedSub = this.shoppingListService.ingredientChanged.subscribe(
      (ingredientArray: Array<Ingredient>) => {
        this.ingredients = ingredientArray;
      }
    );
  }

  onEditIngredient(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }

  ngOnDestroy(): void {
    this.ingredientChangedSub.unsubscribe();
  }
}
