import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

// import { AuthService } from '../auth.service';

import * as AuthActions from '../store/auth.actions';
import * as fromAuthStatus from '../store/auth.reducer';
import * as fromApp from '../../store/app.reducer';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {


  }

  onSignin(form: NgForm) {


    // this.store.dispatch(new AuthActions.Login({password: 'this is password', email: 'This is email'}));
    //
    // this.store.select('loginStatus')
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     }
    //   );

    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TryLogin({password: password, username: email}))

    // this.authService.signinUser(email, password);
  }

}
