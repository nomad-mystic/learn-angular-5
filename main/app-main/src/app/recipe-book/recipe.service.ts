import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeToAddToShoppingList = new EventEmitter<Recipe>();
  list = 1;

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This a test desc 1',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/' +
      '2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A Test Recipe 2',
      'This a test desc 2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/' +
      '0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Burger', 2)
      ]),
    new Recipe(
      'A Test Recipe 3',
      'This a test desc 3', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/' +
      '0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Burger', 2)
      ]),
  ];

  getRecipeById (id: number) {
    return this.recipes[id];
  }

  getRecipes () {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe (recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe (index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipes (recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe (index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
