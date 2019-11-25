import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login: string=""
  senha: string=""

  constructor(public afAuth: AngularFireAuth , public alert: AlertController, public router: Router) {}

  ngOnInit(){

  }
  async home(){
    const{login,senha}=this
    try{
      const res= await this.afAuth.auth.signInWithEmailAndPassword(login + '@souunisuam.com.br', senha)
      console.log(res)
			this.router.navigateByUrl('/cadastro')

    } catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
          console.log("Usuário não encontrado")

      }
    }
  }

}
