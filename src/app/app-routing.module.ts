import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { RegisterComponent } from './layouts/register/register.component';

const routes: Routes = [
  { path:'profile', component:ProfileComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
