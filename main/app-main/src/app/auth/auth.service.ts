import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  private token: string;

  constructor (private router: Router) {}

  signupUser (email: string, password: string) {
    console.log('Inside the singup user');
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signinUser (email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {

        this.router.navigate(['/']);

        // Add and update the web token
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  logout () {
    firebase.auth().signOut();
    this.token = null;
  }

  getUserToken () {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      })
      .catch((error) => console.log(error));

    return this.token;
  }

  isAuthenticated (): boolean {
    return this.token != null;
  }

}
