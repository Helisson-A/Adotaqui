import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/services/home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Page: number = 1

  petList:any = []
  especie: string = ''
  sexo: string = ''

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.search(this.Page)
  }


  search(Page: number){
    this.homeService.getPets(Page).subscribe( (success:any)=> {
      if (this.Page === 1){
        this.petList = success.data
      }
      else{
        this.petList = [...this.petList, ...success.data]
      }
    }, error => {
      console.log(error)
    })
  }

  searchFilter(event: Event){
    let especie = (event.target as HTMLSelectElement).value

    if(especie != ''){
      this.homeService.getPetsFilter(especie).subscribe( (success:any) => {
        this.petList = success
      } )
    }
    else{
      this.Page = 1
      this.search(this.Page)
    }

  }

  paginate(){
    this.Page++
    this.search(this.Page)
  }


}
