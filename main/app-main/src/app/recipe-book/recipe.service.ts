import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.module';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  // recipeToAddToShoppingList = new EventEmitter<Recipe>();
  list = 1;

  constructor(private shoppingListService: ShoppingListService) { }


  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This a test desc 1',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/' +
      '2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('A Test Recipe 2',
      'This a test desc 2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/' +
      '0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Burger', 2)
      ])
  ];


  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }


}
