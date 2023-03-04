import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankTransferComponent } from './layouts/bank-transfer/bank-transfer.component';
import { BuyAssetsComponent } from './layouts/buy-assets/buy-assets.component';
import { HouseComponent } from './layouts/house/house.component';
import { MakeOfferComponent } from './layouts/make-offer/make-offer.component';
import { MakeRequestComponent } from './layouts/make-request/make-request.component';
import { MoneyTransferComponent } from './layouts/money-transfer/money-transfer.component';
import { OfferComponent } from './layouts/offer/offer.component';
import { OthersComponent } from './layouts/others/others.component';
import { TransportationComponent } from './layouts/transportation/transportation.component';

const routes: Routes = [
  { path: '', redirectTo: '/send-money-card', pathMatch: 'full' },
  { path: 'send-money-card', component: MoneyTransferComponent },
  { path: 'send-money-bank', component: BankTransferComponent },
  { path: 'buy-assets', component: BuyAssetsComponent },
  { path: 'make-request', component: MakeRequestComponent },
  { path: 'make-offer', component: MakeOfferComponent },
  { path: 'transportation', component: TransportationComponent },
  { path: 'house', component: HouseComponent },
  { path: 'others', component: OthersComponent },
  { path: 'make-offer', component: OfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
