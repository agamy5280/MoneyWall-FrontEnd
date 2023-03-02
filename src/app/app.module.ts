import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { AssetsComponent } from './layouts/myassets/assets.component';
import { AddAssetsComponent } from './layouts/add-assets/add-assets.component';
import { MytransactionComponent } from './layouts/mytransactions/mytransaction.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    PaymentpageComponent,
    AssetsComponent,
    AddAssetsComponent,
    MytransactionComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
