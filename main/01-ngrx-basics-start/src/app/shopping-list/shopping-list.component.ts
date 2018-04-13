import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { Ingredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})


export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // console.log(this.shoppingListState);
    // console.log(this.store);
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
    // this.slService.startedEditing.next(index);
  }
}
