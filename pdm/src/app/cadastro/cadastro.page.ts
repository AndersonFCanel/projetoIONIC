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
  login: string = "";
  senha: string = "";
  confsenha: string = "";
  public validado: boolean;
  public msg: string;
  public corBotao: string;

  //public login ;
  //public senha ;
  //public confsenha;

  constructor(public afAuth: AngularFireAuth, public ls: LoginService, public menu: MenuController, public alert: AlertController, public router: Router) {

    //.login = this.ls.Login;
    //this.senha = this.ls.Senha;
    this.menu.enable(false);
    this.validado = true;
    this.msg = "";
    this.corBotao = "erro";
  }



  ngOnInit() {
    this.ionViewDidLeave();
  }

  async cadastro() {
    const { nome, email, login, senha, confsenha } = this

    if (nome.length <= 3) {
      //return console.error("Senhas diferentes")
      this.validado = false;
      this.msg = "Nome com menos de 3 caracteres!";
      this.corBotao = "erro";
    }
    else if (login.length <= 3) {
      //return console.error("Senhas diferentes")
      this.corBotao = "erro";
      this.validado = false;
      this.msg = "Login com menos de 3 caracteres!";
    }
    else if (senha.length <= 5) {
      //return console.error("Senhas diferentes")
      this.corBotao = "erro";
      this.validado = false;
      this.msg = "Senha com menos de 5 caracteres!";
    } else if (senha !== confsenha) {
      //return console.error("Senhas diferentes")
      this.corBotao = "erro";
      this.validado = false;
      this.msg = "Senhas diferentes!";
    }

    else {
      this.corBotao = "conec"; {
        this.msg = "";
        this.validado = true;

        try {
          this.msg = "Registrando";
          this.corBotao = "conec";
          this.validado = false;
          const res = await this.afAuth.auth.createUserWithEmailAndPassword(login + '@souunisuam.com.br', senha)
          //console.log(res)
          this.menu.enable(false);
          this.router.navigateByUrl('/login')
        } catch (error) {
          //console.dir(error)
          this.corBotao = "erro";
          this.msg = "Algo deu errado! Tente novamente! \n"+ error;
          this.validado = false;

        }
      }
    }


    /*this.ls.Login = login;
    this.ls.Senha = senha;
    this.menu.enable(false);
    this.router.navigateByUrl('/login')
*/



  }
  checaValoresInformados() {
    return this.validado;
  }

  async voltar() {
    this.msg = "";
    this.validado = true;
    this.menu.enable(false);
    this.router.navigateByUrl('/login')
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(false);
  }

}
