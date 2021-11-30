import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ProfilePet } from '../models/profiles';
import { TokenService } from '../services/token.service'

const API = environment.APIProd
const apiFake = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private httpOptions: any

  constructor(
    private httpClient: HttpClient,
    private tokenService:  TokenService
  ) {

    this.httpOptions = {
      headers: new HttpHeaders({ 'authorization': `bearer ${this.tokenService.getToken()}` })
    };

   }

  getPetProfile(id: number){
    return this.httpClient.get<ProfilePet>(`${API}petProfile/${id}/` )
  }

  getOwnerProfile(id : number){
    return this.httpClient.get<any>(`${API}petProfile/${id}`)
  }

  getComments(id: string){
    return this.httpClient.get<any>(`${API}getComentarios/${id}`)
  }

  PostPergunta(body: any){
    return this.httpClient.post<any>(`${API}postComentario`, body, this.httpOptions)
  }

  PostResposta(body: any){
    return this.httpClient.post<any>(`${API}postComentario`, body, this.httpOptions)
  }

  getFakeFotos(){
    return this.httpClient.get('http://localhost:3000/fotos')
  }

}
