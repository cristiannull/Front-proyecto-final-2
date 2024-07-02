import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideogamelistComponent } from './pages/videogamelist/videogamelist.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './components/guards/login.guard';
import { redirectIfLogged } from './components/guards/redirectIfLogged.guard';
import { CategoryComponent } from './pages/category/category.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'videogamelist',
    component: VideogamelistComponent,
  },
  {
    path: 'detail/:name/:id',
    component: DetailComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  {
    path: 'category/:filterBy/:filterValue',
    component: CategoryComponent,
  },
  {
    path: 'search/:name',
    component: SearchComponent,
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [loginGuard] },
  { path: 'thanks', component: ThanksComponent },
];
