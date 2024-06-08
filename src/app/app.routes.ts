import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideogamelistComponent } from './pages/videogamelist/videogamelist.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videogamelist', component: VideogamelistComponent },
  { path: 'detail/:name/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  
];
