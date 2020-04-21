import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'login',
  //   loadChildren: './auth/auth.module#AuthModule'
  // },
  // {
  //   path: 'home',
  //   loadChildren: './pages/home/home.module#HomeModule',
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
