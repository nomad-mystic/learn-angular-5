import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected isSubmitted: boolean = false;
  protected defaultSelector: string = 'Advanced';
  protected formData = {
    email: '',
    password: '',
    subscription: '',
    message: 'Thank you for Subscribing',
  };


  @ViewChild('formElement') formElement: NgForm;

  static passwordDisplay (formElement: NgForm): string {
    const passwordHashMaker: string[] = [];
    let passwordHash: string;

    for (let i = 0; i < formElement.value.password.length; i++) {
      const star = '*';
      passwordHashMaker.push(star);
    }

    passwordHash = passwordHashMaker.join('');

    return passwordHash;
  }

  onSubmit () {
    console.log(this.formElement);

    this.isSubmitted = true;

    this.formData.password = AppComponent.passwordDisplay(this.formElement);

    this.formData.email = this.formElement.value.email;
    this.formData.subscription = this.formElement.value.subscriptions;
  }


}
