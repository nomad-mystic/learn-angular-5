import { Component, OnDestroy, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent implements OnInit, OnDestroy {

  protected recipe: Recipe;
  protected id: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit (): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
          this.id = +params['id'];
          console.log(this.id);
          this.recipe = this.recipeService.getRecipeById(this.id);
          // this.recipe = this.recipeService.getRecipeById(params.id);
        }
      );
  }

  onAddToShoppingList (): void {
    console.log(this.recipe);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe (): void {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });
    // this.router.navigate(['../', this.id, 'edit'], {
    //   relativeTo: this.route
    // });
  }

  ngOnDestroy (): void {
    // this.route.params.unsubscribe();
  }

}
