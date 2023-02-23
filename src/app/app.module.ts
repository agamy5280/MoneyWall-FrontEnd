import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { HeaderComponent } from './secondary-layouts/header/header.component';
import { FooterComponent } from './secondary-layouts/footer/footer.component';
import { ContactpageComponent } from './layouts/contactpage/contactpage.component';
import { ServicesComponent } from './layouts/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ContactpageComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
