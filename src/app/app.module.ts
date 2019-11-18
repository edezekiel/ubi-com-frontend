import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: "AIzaSyDZGS3hBxxPloWgr8UGxFVWw8Z7h7YRIqg",
  authDomain: "ubi-com-frontend.firebaseapp.com",
  databaseURL: "https://ubi-com-frontend.firebaseio.com",
  projectId: "ubi-com-frontend",
  storageBucket: "ubi-com-frontend.appspot.com",
  messagingSenderId: "501291955869",
  appId: "1:501291955869:web:b7c2ed7ff998a228918674",
  measurementId: "G-LWG97GTL4C"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
