import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

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

  protected recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This a test desc', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg'),
    new Recipe('A Test Recipe', 'This a test desc', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
