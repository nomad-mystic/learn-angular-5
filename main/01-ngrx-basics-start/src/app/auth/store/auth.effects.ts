import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()

export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_REGISTER)
    .map((action: AuthActions.TryRegister) => {
      return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.REGISTER,
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token,
        },
      ];
    });

  @Effect()
  authLogin = this.actions$
    .ofType(AuthActions.TRY_LOGIN)
    .map((action: AuthActions.TryLogin) => {
      return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
      console.log(authData);
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.LOGIN,
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token,
        }
      ]
    });

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .do((action) => {
      this.router.navigate(['/']);
      return fromPromise(firebase.auth().signOut());
    });


  constructor (private actions$: Actions, private router: Router) {}
}
