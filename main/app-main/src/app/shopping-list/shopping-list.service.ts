import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.module';

@Injectable()

export class ShoppingListService implements OnInit {

  public ingredientAdded = new EventEmitter<Ingredient[]>();
  ingredientsToAddToShoppingList: Ingredient[];


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 10),
  ];

  // constructor(private recipeService: RecipeService) { }
  constructor() { }


  ngOnInit() {

  }

  addIngredient(ingredient: Ingredient): void {

    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());

  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  getInitIngredients() {

    return this.ingredients.slice();

  }


}
