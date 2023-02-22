import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { AboutpageComponent } from "./layouts/aboutpage/aboutpage.component";
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';


@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        AboutpageComponent,
        BalancepageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
      
    ]
})
export class AppModule { }
