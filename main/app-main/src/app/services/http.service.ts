import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipe-book/recipe.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class HttpService {

  private recipesEndPoint: string = 'https://nomad-recipe-book.firebaseio.com/recipes.json';

  constructor (private http: Http)  {}

  PUTRecipes (recipes: Recipe[]): Observable<any> {
    return this.http.put(this.recipesEndPoint, recipes, {})
      .map(
        (response: Response) => {
          return response.json();
        }
      ).catch(
        (error) => {
          return Observable.throw(`There was an error in the putting of the recipes ${error}`);
        }
      );
  }

  GETRecipes () {
    return this.http.get(this.recipesEndPoint)
      .map(
        (response: Response) => {
          const recipes = response.json();

          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      ).catch(
        (error) => {
          return Observable.throw(`There was an error with getting the recipes: ${error}`);
        }
      );
  }
}
