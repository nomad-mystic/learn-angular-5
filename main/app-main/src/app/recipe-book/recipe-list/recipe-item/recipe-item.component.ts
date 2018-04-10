import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() protected recipe: Recipe;
  @Input() protected index: number;

  protected name: string;
  protected desc: string;
  protected imagePath: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
