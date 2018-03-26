import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') protected nameInput: ElementRef;
  @ViewChild('amountInput') protected amountInput: ElementRef;

  @Output() protected newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(event: Event): void {

    if (!_.isEmpty(event) && !_.isEmpty(this.nameInput.nativeElement.value)) {
      // console.log(event);
      const name = this.nameInput.nativeElement.value;
      const amount = this.amountInput.nativeElement.value;
      const ingredient = new Ingredient(name, amount);

      this.newIngredient.emit(ingredient);
    }
  }

}
