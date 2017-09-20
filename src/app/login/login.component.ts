// angular
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// custom
import { AuthService } from '../_api/auth.service';
import { ErrorHandlingService } from '../error-handling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, ErrorHandlingService]
})
export class LoginComponent {
  loginForm: FormGroup;
  zoom: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private handle: ErrorHandlingService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['' , [Validators.required]]
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        this.zoom = true;
        // TODO: set token in localstorage
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 750);
      },
      (error) => {
        this.handle.error('Failed to log in.');
      }
    )
  }
}
