import { Injectable } from '@angular/core';

const TOKEN = 'key'

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor() { }

  returnToken(){
    return !!this.getToken()
  }
  getToken(){
    return localStorage.getItem(TOKEN)
  }
  saveToken(token: any){
    localStorage.setItem('key', token)
  }
  deleteToken(){
    localStorage.removeItem('key')
  }
}
