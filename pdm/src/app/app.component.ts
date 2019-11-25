import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {
  public appPages = [
    
    {
      title: 'login',
      url: '/login',
      icon: 'login'
    },
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cadastro',
      url: '/cadastro',
      icon: 'person-add'
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
