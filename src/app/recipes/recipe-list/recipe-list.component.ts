import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://liveitforward.com/wp-content/uploads/2018/05/food-layout_edited_123rf_-53694353_m.png'),
    new Recipe('Test Recipe', 'This is a test recipe', 'https://liveitforward.com/wp-content/uploads/2018/05/food-layout_edited_123rf_-53694353_m.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
