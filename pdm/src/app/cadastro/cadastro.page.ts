import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: string = ""
  email: string = ""
  login : string = "";
  senha : string = "";
  confsenha: string = "";
  
  //public login ;
  //public senha ;
  //public confsenha;

  constructor(public afAuth: AngularFireAuth, public ls: LoginService, public menu: MenuController,  public alert: AlertController, public router: Router) {

    //.login = this.ls.Login;
    //this.senha = this.ls.Senha;
    this.menu.enable(false);

   }

  
  
  ngOnInit() {
    this.ionViewDidLeave();
    }

  async cadastro() {
    const { nome, email, login, senha, confsenha} = this
    
    if(senha !== confsenha){
      return console.error("Senhas diferentes")
    }

    /*this.ls.Login = login;
    this.ls.Senha = senha;
    this.menu.enable(false);
    this.router.navigateByUrl('/login')
*/

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(login + '@souunisuam.com.br', senha)
      console.log(res)
      
      this.menu.enable(false);
			this.router.navigateByUrl('/login')
    }catch(error){
      console.dir(error)

    }

  }


  async voltar() { 
   
      this.menu.enable(false);
			this.router.navigateByUrl('/login')
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(false);
  }

}
