import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ChangPasswordValidadtor } from './changePasswordValidators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, ChangPasswordValidadtor.oldPassIsValid],
      newPassword: ['', Validators.required],
      confirmPassword: ['',Validators.required ]
    }, {
      validator: ChangPasswordValidadtor.confirmNewPass
    }); // formulario
   }// constructor


   get oldPassword() {
     return this.form.get('oldPassword');
   }

   get newPassword(){
     return this.form.get('newPassword');
   }

   get confirmPassword(){
    return this.form.get('confirmPassword');
  }
} // component class
