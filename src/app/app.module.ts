import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/components/homepage/homepage.component';
import { MoneyTransferComponent } from './layouts/components/money-transfer/money-transfer.component';
import { BankTransferComponent } from './layouts/components/bank-transfer/bank-transfer.component';
import { BuyAssetsComponent } from './layouts/components/buy-assets/buy-assets.component';
import { MakeRequestComponent } from './layouts/components/make-request/make-request.component';
import { MakeOfferComponent } from './layouts/components/make-offer/make-offer.component';
import { TransportationComponent } from './layouts/components/transportation/transportation.component';
import { HouseComponent } from './layouts/components/house/house.component';
import { OthersComponent } from './layouts/components/others/others.component';
import { OfferComponent } from './layouts/components/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyTransferComponent,
    HomepageComponent,
    BankTransferComponent,
    BuyAssetsComponent,
    MakeRequestComponent,
    MakeOfferComponent,
    TransportationComponent,
    HouseComponent,
    OthersComponent,
    OfferComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
