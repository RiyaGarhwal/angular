import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: any = {
    data: {},
    message: ''
  }

  signUp() {
    console.log('form: ', this.form);
    console.log('form.data: ', this.form.data);
    console.log('firstName: ', this.form.data.firstName);
    console.log('lastName: ', this.form.data.lastName);
    console.log('loginId: ', this.form.data.loginId);
    console.log('password: ', this.form.data.password);
    console.log('dob: ', this.form.data.dob);
  }

}
