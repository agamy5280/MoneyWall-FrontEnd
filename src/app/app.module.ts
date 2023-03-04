import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankTransferComponent } from './layouts/bank-transfer/bank-transfer.component';
import { BuyAssetsComponent } from './layouts/buy-assets/buy-assets.component';
import { HouseComponent } from './layouts/house/house.component';
import { MakeOfferComponent } from './layouts/make-offer/make-offer.component';
import { MakeRequestComponent } from './layouts/make-request/make-request.component';
import { MoneyTransferComponent } from './layouts/money-transfer/money-transfer.component';
import { OfferComponent } from './layouts/offer/offer.component';
import { OthersComponent } from './layouts/others/others.component';
import { TransportationComponent } from './layouts/transportation/transportation.component';

@NgModule({
  declarations: [
    AppComponent,
    BankTransferComponent,
    BuyAssetsComponent,
    HouseComponent,
    MakeOfferComponent,
    MakeRequestComponent,
    MoneyTransferComponent,
    OfferComponent,
    OthersComponent,
    TransportationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
