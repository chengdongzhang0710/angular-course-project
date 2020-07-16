import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.ingredientAdded.emit({name: this.ingredientName.nativeElement.value, amount: this.ingredientAmount.nativeElement.value})
  }

}
