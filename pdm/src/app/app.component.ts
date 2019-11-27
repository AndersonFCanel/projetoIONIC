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
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'Feed',
      url: '/tabs/tab2',
      icon: 'film'
    },
    {
      title: 'Em Exibicao',
      url: '/tabs/tab3',
      icon: 'film'
    },
    {
      title: 'Sair',
      url: 'tabs/login',
      icon: 'exit'
    },
    /*{
      title: 'Cadastro',
      url: '/cadastro',
      icon: 'person-add'
    },*/
    
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
