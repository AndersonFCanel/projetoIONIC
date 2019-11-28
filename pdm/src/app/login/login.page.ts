import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import config from '../firebase';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login: string;
  public senha: string;
  public validado: boolean;
  //public login ;
  //public senha ;

  // constructor( /*afAuth: AngularFireAuth,*/ public ls: LoginService, public menu: MenuController,  public alert: AlertController, public router: Router) {
  constructor(public afAuth: AngularFireAuth, public menu: MenuController, public alert: AlertController, public router: Router) {
    this.menu.enable(false);
    this.validado = true;
  }


  ngOnInit() {
    console.log(config);

    this.ionViewDidLeave();
  }

  async home() {
    const { login, senha } = this
    /*
        if(login == this.ls.Senha && senha ==this.ls.Senha){
    
          this.menu.enable(true);
          this.router.navigateByUrl('/tabs/tabs')
        }else{
    
          console.log("Usuário não encontrado")
    
        }
    */

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(login + '@souunisuam.com.br', senha)
      console.log(res)
      this.validado = true;
      this.menu.enable(true);
      this.router.navigateByUrl('/tabs/tabs')

    } catch (err) {
      console.dir(err)
      if (err.code === "auth/user-not-found") {
        console.log("Usuário não encontrado")
        this.alert.create;
        this.validado = false;
      }
      this.validado = false;
    }
  }


  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(false);
  }

  checaValoresInformados() {
    return this.validado;
  }
}
