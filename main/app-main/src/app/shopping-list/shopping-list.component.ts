import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.module';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})


export class ShoppingListComponent implements OnInit {

  protected ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getInitIngredients();
    this.shoppingListService.ingredientAdded
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

  }

}
