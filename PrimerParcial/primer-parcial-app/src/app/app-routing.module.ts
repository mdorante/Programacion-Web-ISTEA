import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {path:'', component: LoginComponentComponent},
  {path:'home', component: HomeComponentComponent},
  {path:'userInfo', component: UserInfoComponent},
  {path:'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
