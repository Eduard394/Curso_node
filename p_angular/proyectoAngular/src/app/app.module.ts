import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
//import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { BannerComponent } from './layout/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    [TabsModule.forRoot()],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
