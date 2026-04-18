import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MtxButtonModule } from '@ng-matero/extensions/button';
import { TranslateModule } from '@ngx-translate/core';
import { finalize, timeout } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthService, LoginService } from '@core/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MtxButtonModule,
    TranslateModule,
  ]
})
export class LoginComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);
   private readonly loginService = inject(LoginService);

  isSubmitting = false;

  ngOnInit() {
    // reset login status
   /*  this.loginService.getUserDetails().subscribe(user => {
      this.auth.setUser(user);
    }); */
  }

  loginForm = this.fb.nonNullable.group({
    username: ['ng-matero', [Validators.required]],
    password: ['ng-matero', [Validators.required]],
    rememberMe: [false],
  });

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')!;
  }

  login() {
    if (this.isSubmitting || this.loginForm.invalid) {
      return;
    }
    this.isSubmitting = true;

    this.auth
      .login(this.username.value, this.password.value, this.rememberMe.value)
      .pipe(timeout(15000))
      .pipe(finalize(() => (this.isSubmitting = false)))
      .pipe(filter(authenticated => authenticated))
      .subscribe({
        next: () => {
          //this.router.navigateByUrl('/dashboard');
          this.loginService.getUserDetails().subscribe(user => {
            this.auth.setUser(user);
          });
          // Navigate to the root route after setting the user
          this.router.navigateByUrl('/dashboard');
        },
        error: (errorRes: HttpErrorResponse) => {
          // Generic fallback message for network/CORS/timeout/etc.
          if (errorRes.status === 0) {
            this.loginForm.setErrors({ remote: 'Network/CORS error. Please check API connectivity.' });
            return;
          }
          if ((errorRes as any)?.name === 'TimeoutError') {
            this.loginForm.setErrors({ remote: 'Login request timed out. Please try again.' });
            return;
          }
          if (errorRes.status === 422) {
            const form = this.loginForm;
            const errors = errorRes.error.errors;
            Object.keys(errors).forEach(key => {
              form.get(key === 'email' ? 'username' : key)?.setErrors({
                remote: errors[key][0],
              });
            });
          }
        },
      });
  }
}
