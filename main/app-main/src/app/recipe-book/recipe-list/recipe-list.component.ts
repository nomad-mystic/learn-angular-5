import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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

export class RecipeListComponent implements OnInit, OnDestroy {

  protected recipes: Recipe[];
  private id: number;
  private subscription: Subscription;


  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );

    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //     }
    //   );

    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe () {
    this.router.navigate(['new'], {
      relativeTo: this.route,
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
