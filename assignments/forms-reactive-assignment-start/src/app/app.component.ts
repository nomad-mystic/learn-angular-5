import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  protected signupForm: FormGroup;


  ngOnInit (): void {

    this.signupForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.noTest]),
      email: new FormControl(null, [Validators.required, Validators.email], this.asyncValidation),
      state: new FormControl(null),
    });
  }

  onSubmit = (): void => {
    console.log(this.signupForm);
  }

  noTest = (control: FormControl): {[s: string]: boolean} => {

    if ('Test' === control.value) {
      return {'testInUsername': true};
    }

    return null;

  }

  asyncValidation = (control: FormControl): Promise<any> | Observable<any> => {

    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        console.log(control);
        console.log(control.value.includes('nomad'));
        if (control.value === 'nomadmystics@gmail.com') {
          resolve({'notAGoodEmail': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
