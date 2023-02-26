import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layout/components/homepage/homepage.component';
import { MoneyTransferComponent } from './layout/components/money-transfer/money-transfer.component';
import { BankTransferComponent } from './layout/components/bank-transfer/bank-transfer.component';
import { BuyAssetsComponent } from './layout/components/buy-assets/buy-assets.component';
import { MakeRequestComponent } from './layout/components/make-request/make-request.component';
import { MakeOfferComponent } from './layout/components/make-offer/make-offer.component';
import { TransportationComponent } from './layout/components/transportation/transportation.component';
import { HouseComponent } from './layout/components/house/house.component';
import { OthersComponent } from './layout/components/others/others.component';
import { OfferComponent } from './layout/components/offer/offer.component';

@NgModule({
  declarations: [AppComponent, MoneyTransferComponent, HomepageComponent, BankTransferComponent, BuyAssetsComponent, MakeRequestComponent, MakeOfferComponent, TransportationComponent, HouseComponent, OthersComponent, OfferComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
