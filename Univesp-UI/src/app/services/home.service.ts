import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.APIProd

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPets(page: number){
    return this.httpClient.get( `${API}listAnimais?pageNumber=${page}&rowsPage=8` )
  }

  getPetsFilter(especie: string = ''){
    return this.httpClient.get( `http://localhost:3000/pets?especie=${especie}` )
  }

}