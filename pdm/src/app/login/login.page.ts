import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string=""
  senha: string=""

  constructor(/*public afAuth: AngularFireAuth,*/  public menu: MenuController,  public alert: AlertController, public router: Router) {}

  ngOnInit(){

  }
  async home(){
    const{login,senha}=this
    try{
      //const res= await this.afAuth.auth.signInWithEmailAndPassword(login + '@souunisuam.com.br', senha)
      //console.log(res)
			this.router.navigateByUrl('/tabs/tabs')

    } catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
          console.log("Usuário não encontrado")

      }
    }
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(false);
  }
}
