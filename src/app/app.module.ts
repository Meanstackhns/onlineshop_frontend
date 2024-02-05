import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SampleComponent } from './components/sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { LocalStorageService } from './core/service/localStorage/local-storage.service';
import { CryptoService } from './core/service/crypto/crypto.service';
import { HttpService } from './core/service/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewOrderPageComponent } from './components/view-order-page/view-order-page.component';
import {SwiperModule} from 'swiper/angular';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component'
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SampleComponent,
    LoginComponent,
    SignUpComponent,
    ViewPageComponent,
    ViewOrderPageComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [
    LocalStorageService,
    CryptoService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
