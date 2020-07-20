import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.shoppingListService.addIngredient({name: this.ingredientName.nativeElement.value, amount: this.ingredientAmount.nativeElement.value})
  }

}
