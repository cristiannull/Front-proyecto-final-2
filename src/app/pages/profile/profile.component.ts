import { Component, inject, Input, signal } from '@angular/core';
import { UserService } from '../../service/user.service';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { OrderService } from '../../service/order.service';
import { User, Rol } from '../../models/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private orderService = inject(OrderService);

  userId = signal<string | null>(null);
  user = signal<User | null>(null);
  orders = signal<any>(null);
  roles = signal<Rol[]>([]);
  passwordVisibility = signal(false);
  showPassword = signal(false);

  @Input() id: string = '';
  @Input() filterBy: string = '';
  @Input() filterValue: string = '';

  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(),
    rol: new FormControl(''),
  });

  ngOnInit(): void {
    console.warn('[ngOnInit] Se ha inicializado el componente profile');
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.userId.set(id);
      this.loadUserData();
      this.loadUserOrders();
    }
  }

  loadUserData(): void {
    if (this.userId() !== null) {
      this.userService.getUserById(this.userId()!).subscribe({
        next: (user: User) => {
          const selectedRolId =
            user.rol instanceof Array ? user.rol[0]?._id : undefined;

          this.user.set(user);

          this.userForm.patchValue({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            age: user.age !== null ? user.age : '',
            rol: selectedRolId,
          });
        },
        error: (error) => {
          console.error('Error loading user:', error);
        },
      });
    }
    this.userService.getRol().subscribe({
      next: (roles: Rol[]) => {
        this.roles.set(roles);
      },
    });
  }

  loadUserOrders() {
    if (this.userId() !== null) {
      this.orderService.getOrdersByUser(this.userId()!).subscribe({
        next: (response: any) => {
          console.log('User Orders:', response);
          this.orders.set(response); // Assuming 'response' is the correct data
        },
        error: (error) => {
          console.error('Error loading user orders:', error);
        },
      });
    }
  }

  onSubmit() {
    const formValues = this.userForm.value;
    const userId = this.userId() ?? '';

    const ageValue = typeof formValues.age === 'number' ? formValues.age : null;

    const updatedUser: any = {
      _id: userId,
      firstname: formValues.firstname || '',
      lastname: formValues.lastname || '',
      email: formValues.email || '',
      age: ageValue,
      rol: { _id: formValues.rol || '', name: '' },
    };
    if (formValues.password && formValues.password.trim() !== '') {
      updatedUser.password = formValues.password;
    }

    this.userService.updateUser(userId, updatedUser).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      },
    });
  }

  togglePasswordVisibility() {
    this.showPassword.update((value) => !value);
  }
}
