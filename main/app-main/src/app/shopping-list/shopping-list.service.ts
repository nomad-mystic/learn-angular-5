import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.module';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ShoppingListService implements OnInit {

  public ingredientChanged = new Subject<Ingredient[]>();
  public startEditing = new Subject<number>();
  ingredientsToAddToShoppingList: Ingredient[];


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 10),
  ];

  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {

  }

  getIngredient (index: number) {
    return this.ingredients[index];
  }

  addIngredient (ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients (ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getInitIngredients () {
    return this.ingredients.slice();
  }

  updateIngredient (index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;

    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient (index: number) {
   this.ingredients.splice(index, 1);

   this.ingredientChanged.next(this.ingredients.slice());
  }

}
