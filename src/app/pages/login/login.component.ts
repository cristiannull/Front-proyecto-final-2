import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NavComponent, CommonModule],
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

  showPassword = signal(false);
  errorMessage: string = '';
  passwordVisibility = signal(false);

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem('user_token', response.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMessage = 'Correo electrónico o contraseña incorrectos';
        },
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos requeridos';
    }
  }
  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
}
