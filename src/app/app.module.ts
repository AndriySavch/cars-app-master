import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { PricePipe } from './pipes/price.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    PricePipe,
    ShortenPipe,
    MenuComponent,
    LoginComponent,
    CarListComponent,
    CreateUserComponent,
    FavoritesComponent,
    HomeComponent,
    SideBarComponent,
    LoaderComponent,
    NotFoundComponent,
    CreateCarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
