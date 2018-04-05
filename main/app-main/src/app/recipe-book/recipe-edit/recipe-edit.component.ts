import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as _ from 'lodash';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  protected id: number;
  protected editMode;
  protected editRecipeForm: FormGroup;
  // protected imagePathSrc: string = '';

  @ViewChild('imagePathSrc') imagePathSrc: ElementRef;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit (): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (!_.isEmpty(params['id'])) {
            this.id = +params['id'];
            this.editMode = params['id'] !== null;
          }
          this.initForm();
        }
      );
  }

  private initForm () {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            })
          );
        }
      }
    }

    this.editRecipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onEditRecipeFormSubmit (): void {
    const newRecipe = new Recipe(
      this.editRecipeForm.value['name'],
      this.editRecipeForm.value['description'],
      this.editRecipeForm.value['imagePath'],
      this.editRecipeForm.value['ingredients'],
    );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['/recipes']);
  }

  onEditRecipeFormCancel (): void {
    this.navigateBack();
  }

  navigateBack () {
    this.router.navigate(['/recipes', this.id]);
  }

  onAddIngredient (): void {
    (<FormArray>this.editRecipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    );
  }

  onDeleteRecipe (): void {
    this.recipeService.deleteRecipe(this.id);
    this.editRecipeForm.reset();
  }

  onDeleteIngredient (index: number): void {
    console.log(index);
    console.log((<FormArray>this.editRecipeForm.get('ingredients')));

    (<FormArray>this.editRecipeForm.get('ingredients')).removeAt(index);
  }
}
