import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage {

  ngOnInit() {
    //this.ionViewDidLeave();
    }
 
  constructor(){}//public menu: MenuController ) {}
  
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
//this.menu.enable(true);
  }

}
