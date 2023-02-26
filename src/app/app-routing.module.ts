import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankTransferComponent } from './layout/components/bank-transfer/bank-transfer.component';
import { BuyAssetsComponent } from './layout/components/buy-assets/buy-assets.component';
import { HouseComponent } from './layout/components/house/house.component';
import { MakeOfferComponent } from './layout/components/make-offer/make-offer.component';
import { MakeRequestComponent } from './layout/components/make-request/make-request.component';
import { MoneyTransferComponent } from './layout/components/money-transfer/money-transfer.component';
import { OfferComponent } from './layout/components/offer/offer.component';
import { OthersComponent } from './layout/components/others/others.component';
import { TransportationComponent } from './layout/components/transportation/transportation.component';

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
