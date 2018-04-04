import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  protected sigupForm: FormGroup;
  protected forbiddenUsernames: string[] = ['Chris', 'nomad'];


  ngOnInit () {
    this.sigupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([

      ]),
    });

    // this.sigupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );
    this.sigupForm.statusChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );

    // Whole form
    // this.sigupForm.setValue({
    //   userData: {
    //     username: 'Keith',
    //     email: 'sdf@gmail.com',
    //   },
    //   gender: 'female',
    //   hobbies: []
    // });

    // Whole form
    this.sigupForm.patchValue({
      userData: {
        username: '',
        email: 'sdf@gmail.com',
      },
    });
  }

  onSubmit (): void {
    console.log(this.sigupForm);
    this.sigupForm.reset();
  }

  // Creating new form controls
  onAddHobbies (): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.sigupForm.get('hobbies')).push(control);
  }

  // Creating custom validation
  forbiddenNames = (control: FormControl): {[s: string]: boolean} => {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  // Creating Aysnc validation
  forbiddenEmails (control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if ( control.value === 'testing@gmail.com') {
            resolve({'thisIsForbiddenEmail': true});
          } else {
            resolve(null);
          }
        }, 1000);
    });
  }
}
