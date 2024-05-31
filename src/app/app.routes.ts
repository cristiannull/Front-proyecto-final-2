import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideogamelistComponent } from './pages/videogamelist/videogamelist.component';
import { DetailComponent } from './pages/detail/detail.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videogamelist', component: VideogamelistComponent },
  { path: 'detail/:id', component: DetailComponent },
];
