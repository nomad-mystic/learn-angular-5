import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipe-book/recipe.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class HttpService {

  private recipesEndPoint: string = 'https://nomad-recipe-book.firebaseio.com/recipes.json';

  constructor (private http: Http, private authService: AuthService)  {}

  PUTRecipes (recipes: Recipe[]): Observable<any> {
    const token = this.authService.getUserToken();

    return this.http.put(`${this.recipesEndPoint}/?auth=${token}`, recipes, {})
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
    const token = this.authService.getUserToken();

    return this.http.get(`${this.recipesEndPoint}/?auth=${token}`)
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
