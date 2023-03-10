import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { AssetsComponent } from './layouts/myassets/assets.component';
import { AddAssetsComponent } from './layouts/add-assets/add-assets.component';
import { MytransactionComponent } from './layouts/mytransactions/mytransaction.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { LoginComponent } from './layouts/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutpageComponent } from './layouts/aboutpage/aboutpage.component';
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';
import { PaymentpageComponent } from './layouts/paymentpage/paymentpage.component';
import { HeaderComponent } from './secondary-layouts/header/header.component';
import { FooterComponent } from './secondary-layouts/footer/footer.component';
import { ContactpageComponent } from './layouts/contactpage/contactpage.component';
import { ServicesComponent } from './layouts/services/services.component';
import { RegisterComponent } from './layouts/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordResetRequestComponent } from './secondary-layouts/password-reset-request/password-reset-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CutPipe } from './pipes/cut.pipe';
import { BalancePipe } from './pipes/balance.pipe';
import { DashboardComponent } from './secondary-layouts/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    AboutpageComponent,
    BalancepageComponent,
    PaymentpageComponent,
    AssetsComponent,
    AddAssetsComponent,
    MytransactionComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactpageComponent,
    ServicesComponent,
    RegisterComponent,
    PasswordResetRequestComponent,
    CutPipe,
    BalancePipe,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
