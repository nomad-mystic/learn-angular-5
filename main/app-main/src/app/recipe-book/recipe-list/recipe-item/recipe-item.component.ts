import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.module";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() protected recipe: Recipe;

  @Output() protected recipeSelected = new EventEmitter<void>();

  protected name: string;
  protected desc: string;
  protected imagePath: string;

  constructor() { }

  ngOnInit() {
  }

  onSelected(event: Event): void {

    // console.log(event);

    this.recipeSelected.emit();

  }

}
