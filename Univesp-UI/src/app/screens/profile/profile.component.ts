import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

import { ProfilePet, comentarios, Profile, pets } from 'src/app/models/profiles';
import { UsuarioService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private ProfileService: ProfileService,
    private Route: Router,
    private userService: UsuarioService,
    private tokenService: TokenService,
    private activeRouter: ActivatedRoute,
  ) { }

  type!: any;
  id!: any;
  idUser!: any;
  pergunta: string = '';
  isLogg: boolean = false;

  profilePet!: ProfilePet
  profile!: Profile
  comentarios = [] as comentarios[]
  pets = [] as pets[]

  arrFake = [] as any

  ngOnInit(): void {

    this.id = this.activeRouter.snapshot.paramMap.get('id')

    this.userService.getUser().subscribe( (user: Profile) => {
        this.idUser = user.IdUsuario
    } )

    this.getLogin()
    this.getfotos()

    this.ProfileService.getPetProfile(this.id).subscribe( (success: any) => {
      console.log(success)
      this.profilePet = success.data.Animal
      this.profile = success.data.Usuario
        this.loadMessages()

    }, error => {
      this.Route.navigateByUrl('home')
    } )

    this.loadMessages()

  }

  loadMessages(){
    this.ProfileService.getComments(this.id).subscribe( (success: any) => {
      this.comentarios = success.data
    }, error => {
      console.log(error)
    } )
  }

  PostPergunta(){

    if (this.pergunta != '' && this.getLogin()){

      console.log('aaaaaaaaaaaaaaaa')

      let body = {
        IdAnimal: +this.id,
        Comentario: this.pergunta
      }
      

      this.ProfileService.PostPergunta(body).subscribe( (success: any) => {
        this.comentarios = []
        this.loadMessages()
      }, error => {
        alert('Não foi possivel posta a sua pergunta')
      } )
    }
    else{
      this.Route.navigate(['login'])
    }
}

  getLogin(){
    if(this.tokenService.returnToken()){
      this.isLogg = true
      return true
    }
    else{
      this.isLogg = false
      return false
    }

    return false
  }

  getfotos(){
    this.ProfileService.getFakeFotos().subscribe( (success : any) => {
      this.arrFake = success

      console.log(this.arrFake)
    } ) 
  }

}
