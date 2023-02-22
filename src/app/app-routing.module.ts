import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './layouts/aboutpage/aboutpage.component';
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { RegisterComponent } from './layouts/register/register.component';

const routes: Routes = [
  { path:'profile', component:ProfileComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path:'balance', component:BalancepageComponent },

  { path:'about', component:AboutpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
