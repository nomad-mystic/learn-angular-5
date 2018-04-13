// import { Router } from '@angular/router';
// import * as firebase from 'firebase';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
//
// import * as fromApp from '../store/app.reducer';
// import * as AuthActions from './store/auth.actions';
//
// @Injectable()
// export class AuthService {
//   constructor(private router: Router, private store: Store<fromApp.AppState>) {}
//
//   signupUser(email: string, password: string) {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(
//         (user) => {
//           this.store.dispatch(new AuthActions.Register());
//           firebase.auth().currentUser.getToken()
//             .then(
//               (token: string) => {
//                 this.store.dispatch(new AuthActions.Login());
//                 this.store.dispatch(new AuthActions.SetToken(token));
//               }
//             )
//         }
//       )
//       .catch(
//         error => console.log(error)
//       )
//   }
//
//   signinUser(email: string, password: string) {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(
//         (response) => {
//           this.router.navigate(['/']);
//           firebase.auth().currentUser.getToken()
//             .then(
//               (token: string) => {
//                 this.store.dispatch(new AuthActions.Login());
//                 this.store.dispatch(new AuthActions.SetToken(token));
//               }
//             )
//         }
//       )
//       .catch(
//         error => console.log(error)
//       );
//   }
//
//
// }
