import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://equalexchange.coop/sites/default/files/styles/page_header_image__normal/public/recipe/recipe-fav-choc-chip-cookie_0.jpg?itok=WXWMiVIT'),
    new Recipe('Another Test Recipe', 'This is an another test recipe', 'http://i.ytimg.com/vi/jNB_-NoN-bU/maxresdefault.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

}
