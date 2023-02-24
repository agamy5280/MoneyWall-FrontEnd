import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layout/components/homepage/homepage.component';
import { MoneyTransferComponent } from './layout/components/money-transfer/money-transfer.component';

@NgModule({
  declarations: [AppComponent, MoneyTransferComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
