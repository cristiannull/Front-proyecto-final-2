import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
