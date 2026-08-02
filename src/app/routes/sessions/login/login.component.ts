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

import { AuthService } from '@core/authentication';

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

  isSubmitting = false;
  hasSavedSchoolCode = false;

  ngOnInit() {
    // reset login status
   /*  this.loginService.getUserDetails().subscribe(user => {
      this.auth.setUser(user);
    }); */

    const savedSchoolCode = localStorage.getItem('schoolCode')?.trim();
    this.hasSavedSchoolCode = !!savedSchoolCode;
    if (savedSchoolCode) {
      // Keep tenant context available for the interceptor without showing it again.
      sessionStorage.setItem('schoolCode', savedSchoolCode);
      this.loginForm.patchValue({ schoolCode: savedSchoolCode });
      this.schoolCode.disable({ emitEvent: false });
      this.schoolCode.clearValidators();
      this.schoolCode.updateValueAndValidity({ emitEvent: false });
    }
  }

  loginForm = this.fb.nonNullable.group({
    schoolCode: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  get schoolCode() {
    return this.loginForm.get('schoolCode')!;
  }

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

    // The interceptor reads this value and sends it as X-School-Code.
    const savedSchoolCode = localStorage.getItem('schoolCode')?.trim();
    const sc = (this.schoolCode.value?.trim() || savedSchoolCode || '').trim();
    if (sc) {
      sessionStorage.setItem('schoolCode', sc);
    }

    this.auth
      .login(this.username.value, this.password.value, this.rememberMe.value)
      .pipe(timeout(15000))
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: () => {
          if (sc) {
            localStorage.setItem('schoolCode', sc);
          }

          this.router.navigateByUrl('/dashboard');
        },
        error: (errorRes: HttpErrorResponse | Error) => {
          if (!this.hasSavedSchoolCode) {
            sessionStorage.removeItem('schoolCode');
          }

          const status = errorRes instanceof HttpErrorResponse ? errorRes.status : 0;
          const apiError =
            errorRes instanceof HttpErrorResponse
              ? errorRes.error
              : { message: errorRes.message };

          if (status === 0) {
            this.loginForm.setErrors({
              remote:
                'Cannot reach API. Start with `ng serve` (proxy forwards to https://api.asterinfotech.in).',
            });
            return;
          }
          if ((errorRes as { name?: string })?.name === 'TimeoutError') {
            this.loginForm.setErrors({ remote: 'Login request timed out. Please try again.' });
            return;
          }
          if (status === 401 || status === 403) {
            const msg =
              apiError?.message ||
              apiError?.error ||
              'Invalid credentials. Please check school code, username, and password.';
            this.loginForm.setErrors({ remote: msg });
            return;
          }
          if (status === 422 && apiError?.errors) {
            const form = this.loginForm;
            const errors = apiError.errors;
            Object.keys(errors).forEach(key => {
              form.get(key === 'email' ? 'username' : key)?.setErrors({
                remote: errors[key][0],
              });
            });
            this.loginForm.setErrors({ remote: 'Please correct the highlighted fields.' });
            return;
          }

          const apiMessage =
            apiError?.message ||
            apiError?.error ||
            apiError?.title ||
            (errorRes instanceof Error ? errorRes.message : errorRes.message);
          this.loginForm.setErrors({ remote: apiMessage || 'Login failed. Please try again.' });
        },
      });
  }
}
