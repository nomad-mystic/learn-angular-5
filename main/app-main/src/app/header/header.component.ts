import {Component, EventEmitter, Output} from '@angular/core';

import { HttpService } from '../services/http.service';
import { Recipe } from '../recipe-book/recipe.module';
import { RecipeService } from '../recipe-book/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent {

  private recipes: Recipe[] = this.recipesService.getRecipes();


  constructor (private httpService: HttpService, private recipesService: RecipeService) {}

  onPUTRecipes () {
    this.httpService.PUTRecipes(this.recipes)
      .subscribe(
        (data: Recipe[]) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onGETRecipes () {
    this.httpService.GETRecipes()
      .subscribe(
        (data: Recipe[]) => {
          this.recipesService.updateRecipes(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
