import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  private endpoint = 'https://nomad-recipe-book.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    // return this.httpClient.put('https://nomad-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   // observe: 'events',
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token),
    //   // headers: new HttpHeaders({
    //   //   'Content-Type': 'application/json; charset=UTF-8'
    //   // }),
    // });
    // Creating the request
    const req = new HttpRequest('PUT', this.endpoint, this.recipeService.getRecipes(), {
      reportProgress: true,
      // params: new HttpParams().set('auth', token),
    });

    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.httpClient.get('https://nomad-recipe-book.firebaseio.com/recipes.json?auth=' + token, {
    //   observe: 'response', // This is how you get a full response
    //   responseType: 'text',
    // })
    //   .map(
    //     (recipes) => {
    //       console.log(recipes);
    //       // const recipes: Recipe[] = response.json();
    //       // for (const recipe of recipes) {
    //       //   if (!recipe['ingredients']) {
    //       //     recipe['ingredients'] = [];
    //       //   }
    //       // }
    //       return [];
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );
    // Default
    this.httpClient.get<Recipe[]>('https://nomad-recipe-book.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json',
    })
      .map(
        (recipes) => {
          // const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
