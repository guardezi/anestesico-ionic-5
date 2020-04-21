import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.modules';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
