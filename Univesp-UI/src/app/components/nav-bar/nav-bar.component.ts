import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profiles';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(
    private userService: UsuarioService,
    private router: Router
  ) { }

  profile: string = '';
  idUser!: number

  ngOnInit(): void {
    this.userService.getUser().subscribe( (user: Profile) => {
      let [nome] = user.Nome.split(' ')
      this.profile = nome
      this.idUser = user.IdUsuario
    } )
  }

  logOut(){
    this.userService.logout()
    this.router.navigate(['login'])
  }

}
