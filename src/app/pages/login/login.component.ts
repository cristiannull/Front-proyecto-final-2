import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NavComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private router = inject(Router);
  private userService = inject(UserService);

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem('user_token', response.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('Campos no validos');
    }
  }
}
