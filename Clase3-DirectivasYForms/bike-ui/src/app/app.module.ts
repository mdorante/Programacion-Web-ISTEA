import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ImagedetailsComponent } from './components/imagedetails/imagedetails.component';
import { ImagegalleryComponent } from './components/imagegallery/imagegallery.component';
import { ViewregistrationComponent } from './components/viewregistration/viewregistration.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, AdminComponent, ImagedetailsComponent, ImagegalleryComponent, ViewregistrationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
