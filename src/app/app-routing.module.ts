import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { ViewOrderPageComponent } from './components/view-order-page/view-order-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {
    path: 'landing-page', component: LandingPageComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path:'register',component:SignUpComponent },
      {path:'view-page',component:ViewPageComponent}
    ]
  },
  {path:"view-order-page",component:ViewOrderPageComponent},
  {path:"view-page",component:ViewPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
