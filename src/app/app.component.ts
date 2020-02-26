import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Plugins, PluginListenerHandle, NetworkStatus } from "@capacitor/core";
import { Router } from '@angular/router';
const { Network } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  networkListener: PluginListenerHandle;
  networkStatus: NetworkStatus;
  user
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.user=localStorage.getItem("user");
    console.log("user:  " +this.user)
    // let networkStatus: any;
    // this.networkListener = Network.addListener('networkStatusChange', status => {
    //   this.networkStatus = status;
    //   this.checkUser(this.networkStatus);
    // });
    // this.networkStatus = await Network.getStatus();
    // this.checkUser(this.networkStatus);

    if (this.user !=null) {
      this.router.navigateByUrl("tabs/home");
    } else {
      this.router.navigateByUrl("login");
    }
  }

  // checkUser(networkStatus) {

  //   // localStorage.getItem("user");
  //   if (networkStatus.connected) {
  //     this.router.navigateByUrl("tabs/home");
  //   } else {
  //     this.router.navigateByUrl("loader");
  //   }
  // }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleLightContent()
      this.splashScreen.hide();
      
    });
  }
}
