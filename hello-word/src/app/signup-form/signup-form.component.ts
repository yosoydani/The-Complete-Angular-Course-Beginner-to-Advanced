import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique
      ),
     password: new FormControl('', Validators.required)
    }) // account formGroup
  }); // root formGroup

  onSubmit() {
    this.form.setErrors({
      invalildateLogin: true
    });
  }
  get username() {
     return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
} // class singupForm Component
