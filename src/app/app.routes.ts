import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateUserComponent },
  { path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/car-list',  pathMatch: 'full'},
      { path: 'car-list', component: CarListComponent },
      { path: 'create-car', component: CreateCarComponent},
      { path: 'favorites', component: FavoritesComponent }
    ]
  },
  {path: '**', component: NotFoundComponent }
];
