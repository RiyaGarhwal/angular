import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginId = ''
  password = ''
  message = ''

  constructor(private router: Router) {

  }

  signIn() {
    console.log('loginId: ', this.loginId);
    console.log('password: ', this.password);

    if (this.loginId == 'admin' && this.password == 'admin') {
      this.router.navigateByUrl('welcome');
    } else {
      this.message = 'Login ID & Password is Invalid'
    }
  }
}
