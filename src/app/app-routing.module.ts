import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetsComponent } from './layouts/add-assets/add-assets.component';
import { AssetsComponent } from './layouts/myassets/assets.component';
import { MytransactionComponent } from './layouts/mytransactions/mytransaction.component';

const routes: Routes = [
  { path: '', component: AssetsComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'add-asset', component: AddAssetsComponent },
  { path: 'transactions', component: MytransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
