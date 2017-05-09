import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from "angularfire2/angularfire2";

import { AngularFirebase2Service } from './angular-firebase2/angular-firebase2.service';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChatComponent } from './chat/chat.component';

import { SlimScrollModule } from 'ng2-slimscroll';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'login', component: LoginComponent }
]

// Must export the config
export const fbConfig = {
  apiKey: "AIzaSyBLs717agDSSAwGGTAj-NKl6_yJGNTvoZ0",
  authDomain: "mensageiro-1dc58.firebaseapp.com",
  databaseURL: "https://mensageiro-1dc58.firebaseio.com",
  projectId: "mensageiro-1dc58",
  storageBucket: "mensageiro-1dc58.appspot.com",
  messagingSenderId: "899927886201"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimScrollModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(fbConfig),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [AngularFirebase2Service, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
