import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Profile } from '../models/profiles';

const API = environment.APIProd

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOptions: any;

  constructor(
    private http: HttpClient) 
    { 
          this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': 'rpuPnc6Z8py20tafjb5vYCvefdBr5E6PGiGy6wX3GJln74ltbB7UiQvb7f9En36n ' })
          };

     }

  getCSRF(){
    return this.http.get(`${API}login/`)
  } 

  login(body: any){
    return this.http.post(`${API}login/`,body)
  }

  signIn(body: Profile ){

    let register = {
      Nome: body.Nome,
      DataNasc: body.DataNasc,
      Celular: body.Celular,
      EmailAcesso: body.EmailAcesso,
      Senha: body.Senha,
      EndRua: body.EndRua,
      Numero: body.Numero,
      Bairro: body.Bairro,
      Cidade: body.Cidade,
      Complemento: body.Complemento,
      NomeInstit: body.NomeInstit,
      SiteInstit: body.SiteInstit,
      SobreInstit: body.SobreInstit,
    }

    return this.http.post(`${API}cadastroUsuario/`, register)
  }
}
