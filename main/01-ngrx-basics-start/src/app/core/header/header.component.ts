import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase';


import { DataStorageService } from '../../shared/data-storage.service';
// import { AuthService } from '../../auth/auth.service';

import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer'
import * as AuthActions from '../../auth/store/auth.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor (
    private dataStorageService: DataStorageService,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}


  ngOnInit () {
    console.log('ngOnInit was called');
    this.authState = this.store.select('auth');
    console.log(this.authState);
  }


  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {

    this.store.dispatch(new AuthActions.Logout());

    // this.authService.logout();
  }
}
