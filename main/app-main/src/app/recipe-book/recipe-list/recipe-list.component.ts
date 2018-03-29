import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

/**
 * @author Keith Murphy - kmurphy@catalyte.io
 * @whatItDoes Displays a list of recipes
 * @description
 * @class RecipeListComponent
 */

export class RecipeListComponent implements OnInit {

  protected recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
