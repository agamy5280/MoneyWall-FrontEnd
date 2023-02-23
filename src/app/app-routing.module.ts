import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './layouts/contactpage/contactpage.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ServicesComponent } from './layouts/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'home/services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
