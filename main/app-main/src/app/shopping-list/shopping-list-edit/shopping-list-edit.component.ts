import { Component, ElementRef, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {

  private itemSubscription: Subscription;
  public editMode: boolean = false;
  private editedItemIndex: number;
  private editedItem: Ingredient;

  // protected shoppingListFormValues: NgForm;


  @ViewChild('shoppingListForm') shoppingListForm: NgForm;

  // @ViewChild('nameInput') protected nameInput: ElementRef;
  // @ViewChild('amountInput') protected amountInput: ElementRef;

  // @Output() protected newIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.itemSubscription =  this.shoppingListService.startEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);

          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        }
      );
  }

  ngOnDestroy (): void {
    this.itemSubscription.unsubscribe();
  }

  // onAddIngredient(event: Event): void {
  //
  //   if (!_.isEmpty(event) && !_.isEmpty(this.nameInput.nativeElement.value)) {
  //     // console.log(event);
  //     const name = this.nameInput.nativeElement.value;
  //     const amount = this.amountInput.nativeElement.value;
  //     const ingredient = new Ingredient(name, amount);
  //
  //     this.shoppingListService.addIngredient(ingredient);
  //
  //
  //   }
  // }


  onAddToShoppingListSubmit (form: NgForm): void {
    const shoppingListFormValues = form.value;
    const newIngredient = new Ingredient(shoppingListFormValues.name, shoppingListFormValues.amount);

    if (this.editMode) {
      this.editMode = false;
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.editMode = false;
    this.shoppingListForm.reset();

  }

  onClearShoppingListForm (): void {
    this.editMode = false;

    this.shoppingListForm.reset();
  }

  onDeleteShoppingListForm (): void {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearShoppingListForm();
  }

}
