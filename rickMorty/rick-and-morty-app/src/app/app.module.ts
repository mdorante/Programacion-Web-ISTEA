import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginButtonComponent, NavbarComponent, LogoutButtonComponent, CharactersComponent, EpisodesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
