import { Component, Renderer2, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private bodyElement!: HTMLElement;
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.bodyElement = document.querySelector('body') as HTMLElement;
  }

  ngOnDestroy() {
    if (this.bodyElement) {
      this.renderer.setStyle(this.bodyElement, 'overflow', 'initial');
      this.renderer.setStyle(this.bodyElement, 'paddingRight', null);
    }
  }

  isLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }
}
