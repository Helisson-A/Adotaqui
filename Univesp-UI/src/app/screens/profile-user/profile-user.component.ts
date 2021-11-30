import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

import { ProfilePet, comentarios, Profile, pets } from 'src/app/models/profiles';
import { UsuarioService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { ProfileUserService } from 'src/app/services/profile-user.service';

@Component({
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  constructor(
    private Route: Router,
    private activeRouter: ActivatedRoute,
    private ProfileService: ProfileUserService
  ) { }

  id!: any;

  profileUser!: Profile
  pets = [] as pets[]

  ngOnInit(): void {

    this.id = this.activeRouter.snapshot.paramMap.get('id')

    this.ProfileService.getProfileUser(this.id).subscribe( (success: any) => {
      this.profileUser = success.data[0]
      this.pets = success.data[0].Animais

    }, error => {
      this.Route.navigateByUrl('home')
    } )

  }
}
