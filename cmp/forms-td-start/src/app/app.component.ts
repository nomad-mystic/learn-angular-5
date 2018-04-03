import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected genders = [
    'male',
    'female',
  ];
  protected defualtQuestion: string = 'pet';
  protected answer: string = '';
  protected user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  };

  protected submitted: boolean = false;


  @ViewChild('form') formElement: NgForm;

  // protected onSubmit (form: NgForm): void {
  //
  //   console.log(form);
  // }

  protected onSubmittedFromChild (): void {
    console.log(this.formElement);
    this.submitted = true;
    this.user.username = this.formElement.value.userData.username;
    this.user.email = this.formElement.value.userData.email;
    this.user.secret = this.formElement.value.secret;
    this.user.answer = this.formElement.value.questionArea;
    this.user.gender = this.formElement.value.gender;

    this.formElement.reset();
  }

  suggestUserName () {
    const suggestedName = 'Superuser';
    // this.formElement.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   gender: 'male',
    //   questionArea: '',
    // });
    this.formElement.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

}
