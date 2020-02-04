import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simple test', 'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg'),
    new Recipe('A second test recipe', 'This is a simple test', 'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}
