import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.APIProd

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProfileUser(body: number){
    return this.httpClient.get(`${API}getUser/${body}`)
  }
}
