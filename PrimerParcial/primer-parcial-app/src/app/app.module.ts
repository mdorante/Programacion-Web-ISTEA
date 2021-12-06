import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NotificationService } from '@progress/kendo-angular-notification';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MenuComponentComponent,
    HomeComponentComponent,
    NavbarComponent,
    SideNavbarComponent,
    UserInfoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
