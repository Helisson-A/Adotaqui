import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

const API = environment.APIProd

@Injectable({
  providedIn: 'root'
})
export class PetRegisterService {

  private httpOptions: any

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService

  ) {

    this.httpOptions = {
      headers: new HttpHeaders({ 'authorization': `bearer ${this.tokenService.getToken()}` })

    };
   }

  postPet(body: any){
    return this.httpClient.post(`${API}cadastroAnimais/`, body, this.httpOptions)
  }
}
