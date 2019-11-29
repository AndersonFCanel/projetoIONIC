import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

//import config from '../firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login: string;
  public senha: string;
  public validado: boolean;
  public msg: string;
  public corBotao: string;
  //public login ;
  //public senha ;

  // constructor( /*afAuth: AngularFireAuth,*/ public ls: LoginService, public menu: MenuController,  public alert: AlertController, public router: Router) {
  constructor(public afAuth: AngularFireAuth, public menu: MenuController, public alert: AlertController, public router: Router) {
    this.menu.enable(false);
    this.validado = true;
    this.msg ="";
    this.senha = "";
    this.login = "";
    this.corBotao = "erro";
  }


  ngOnInit() {
    //console.log(config);
    this.menu.enable(false);
  }

  async home() {
    let { login, senha } = this
    /*
        if(login == this.ls.Senha && senha ==this.ls.Senha){
    
          this.menu.enable(true);
          this.router.navigateByUrl('/tabs/tabs')
        }else{
    
          console.log("Usuário não encontrado")
    
        }
    */

    try {
      this.menu.enable(true);
      this.validado = false;
      this.msg = "Conectando";
      this.corBotao = "conec";
      const res = await this.afAuth.auth.signInWithEmailAndPassword(login + '@souunisuam.com.br', senha)
      //console.log(res)
      this.validado = true;
      this.router.navigateByUrl('/tabs/tabs')

    } catch (err) {
      this.corBotao = "erro";
      //console.dir(err)
      this.msg = "Senha Inválida!";
     
      if (err.code === "auth/user-not-found") {
        //console.log("Usuário não encontrado!")
        this.alert.create;
        this.msg = "Usuário não encontrado!";
        this.validado = false;
      }
        
      this.validado = false;
    }
  }

  
  checaValoresInformados() {
    return this.validado;
  }
  
  

}
