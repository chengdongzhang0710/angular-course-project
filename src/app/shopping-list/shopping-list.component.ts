import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: Array<Ingredient> }>;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditIngredient(id: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(id));
  }
}
