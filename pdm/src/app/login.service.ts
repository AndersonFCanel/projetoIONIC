import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private login;
private senha ;

  constructor() {
    this.login = "";
    this.senha = "";
   }

get Login() {
  return this.login;
}

set  Login (value: String){
    this.login = value;
}


get Senha() {
  return this.senha;
}

set  Senha (value: String){
    this.senha = value;
}

}
