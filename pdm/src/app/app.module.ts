import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
//import config from './firebase';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  // SUBSTITUIR COM AS SUAS INFORMAÇÕES DO FIREBASE
 

  apiKey: "AIzaSyAU7NHMnqeCJjOiywbLR6qQpkcB0u6Kn5M",
  authDomain: "trabalho-dm.firebaseapp.com",
  databaseURL: "https://trabalho-dm.firebaseio.com",
  projectId: "trabalho-dm",
  storageBucket: "trabalho-dm.appspot.com",
  messagingSenderId: "407124126676",
  appId: "1:407124126676:web:36bdc16b817e33229e4441",
  measurementId: "G-5GE2DFY95Q"

}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),// imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule], // imports firebase/storage only needed for storage features
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}


