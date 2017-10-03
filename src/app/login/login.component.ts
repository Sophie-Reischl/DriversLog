// angular
import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

// custom
import { AuthService } from '../_api/auth.service'
import { DialogHandlingService } from '../dialog-handling.service'
import { writeToLS, readFromLS } from '../app.config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, DialogHandlingService]
})
export class LoginComponent {
  loginForm: FormGroup
  zoom: boolean = false

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private handle: DialogHandlingService) {
    this.createForm()
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
        if (result.token) {

          writeToLS({ token: result.token })

          this.zoom = true
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 750)

        } else this.handle.dialog('Email or password is wrong.')
      },
      (error) => {
        this.handle.dialog('Failed to log in.', true)
      }
    )
  }
}
