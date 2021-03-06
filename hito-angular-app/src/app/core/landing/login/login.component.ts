import { validationConstants, routingConstants } from './../../../shared/constants';
import { Login } from '../../../shared/state-management/auth.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/shared/models/dtos/login-dto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hasSubmittedForm: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  }, { updateOn: 'submit' }
  );

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginInput: LoginDTO) {
    this.hasSubmittedForm = true;
    this.validateForm();
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(loginInput));
    }
  }

  validateForm() {
    if (this.loginForm.get('email').hasError('required')) {
      this.emailErrorMessage = validationConstants.emailRequired;
    }
    if (this.loginForm.get('email').hasError('email')) {
      this.emailErrorMessage = validationConstants.emailEmail;
    }
    if (this.loginForm.get('password').hasError('required')) {
      this.passwordErrorMessage = validationConstants.passwordRequired;
    }
  }
}
