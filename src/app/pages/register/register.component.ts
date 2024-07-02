import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  registerForm = new FormGroup({
    firstname: new FormControl('', {
      validators: [Validators.required],
    }),
    lastname: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
    age: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  showPassword = signal(false);
  errorMessage: string = '';
  passwordVisibility = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      console.log('Podemos enviar la información');
      const formValues = this.registerForm.value;
      const user: User = {
        firstname: formValues.firstname!,
        lastname: formValues.lastname!,
        email: formValues.email!,
        password: formValues.password!,
        age: Number(formValues.age),
      };

      this.userService.register(user).subscribe({
        next: (response: any) => {
          localStorage.setItem('user_token', response.token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
          this.errorMessage =
            error.error.message ||
            'Error inesperado. Por favor, intenta de nuevo más tarde.';
        },
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
      console.log('Campos no válidos');
    }
  }

  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
}
