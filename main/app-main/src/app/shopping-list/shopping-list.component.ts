import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from '../recipe-book/recipe.service';
// import { Recipe } from '../recipe-book/recipe.module';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})


export class ShoppingListComponent implements OnInit, OnDestroy {

  protected ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit () {

    this.ingredients = this.shoppingListService.getInitIngredients();
    this.subscription = this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  onEditOnItem (index: number): void {
    this.shoppingListService.startEditing.next(index);

  }
}
