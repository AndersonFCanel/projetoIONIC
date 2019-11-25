import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: string = ""
  email: string = ""
  login: string = ""
  senha: string = ""
  confsenha: string = ""

  constructor( public afAuth: AngularFireAuth,  public alert: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async cadastro() {
    const { nome, email, login, senha, confsenha} = this
    if(senha !==confsenha){
      return console.error("Senhas diferentes")
    }

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(login + '@souunisuam.com.br', senha)
      console.log(res)
			this.router.navigateByUrl('/home')
    }catch(error){
      console.dir(error)

    }
  }

}
