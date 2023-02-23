import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AboutpageComponent } from "./layouts/aboutpage/aboutpage.component";
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';
import { PaymentpageComponent } from './layouts/paymentpage/paymentpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    LoginComponent,
    AboutpageComponent,
    BalancepageComponent,
    RegisterComponent,
    PaymentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
