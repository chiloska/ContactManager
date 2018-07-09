import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { AcccesGuardService } from './services/accces-guard.service';
import { DataService } from './services/data.service';


export const config = {
  apiKey: "AIzaSyDMOMlwMEae32k3gb1Q0p3HFPGmyL5p6fU",
  authDomain: "learfirebase101.firebaseapp.com",
  databaseURL: "https://learfirebase101.firebaseio.com",
  projectId: "learfirebase101",
  storageBucket: "learfirebase101.appspot.com",
  messagingSenderId: "536944026455"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    HomeModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config), AngularFireAuthModule, AngularFirestoreModule
  ],
  providers: [AuthService, AcccesGuardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
