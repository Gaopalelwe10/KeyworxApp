import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { FullScreenImage } from '@ionic-native/full-screen-image';
import { ZoomAreaModule } from 'ionic2-zoom-area';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { TabsPage } from './pages/tabs/tabs.page';

const firebaseConfig = {
  apiKey: "AIzaSyA4CMD51Wz_G564J0h4HJeFG27-UI12Kkw",
    authDomain: "keyworkx.firebaseapp.com",
    databaseURL: "https://keyworkx.firebaseio.com",
    projectId: "keyworkx",
    storageBucket: "keyworkx.appspot.com",
    messagingSenderId: "128522126421",
    appId: "1:128522126421:web:bf8e034c8207cdac6f40dc",
    measurementId: "G-L60BJ3N668"
};

@NgModule({
  declarations: [AppComponent,TabsPage],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    // ZoomAreaModule,
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
