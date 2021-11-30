import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

import { Profile } from '../models/profiles';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<any>({})
  constructor(
    private tokenService: TokenService
  ) { 
    if (this.tokenService.returnToken()){
        this.decodeJWT()
    }
  }

  private decodeJWT(){
    const token = this.tokenService.getToken() ?? '';
    const user = jwt_decode(token) as any;
    this.usuarioSubject.next(user)
  }

  setToken(token: string){
    this.tokenService.saveToken(token)
    this.decodeJWT()
  }
  
  getUser(){
    return this.usuarioSubject.asObservable();
  }

  logout(){
    this.tokenService.deleteToken()
    this.usuarioSubject.next({})
  }

  isLogged(){
    return this.tokenService.returnToken()
  }

}
