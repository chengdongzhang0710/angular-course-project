import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) ingredientForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIngredientId: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editedIngredientId = id;
        this.editedIngredient = this.shoppingListService.getIngredient(id);
        this.ingredientForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        });
      }
    );
  }

  onSubmit() {
    const newIngredient = {
      name: this.ingredientForm.value.name,
      amount: this.ingredientForm.value.amount,
    };
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedIngredientId,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedIngredientId);
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onClearIngredient() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
