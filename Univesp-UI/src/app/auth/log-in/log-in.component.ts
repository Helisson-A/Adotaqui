import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  formLogin = new FormGroup({
    EmailAcesso: new FormControl('', Validators.required),
    Senha: new FormControl('', Validators.required)
  })

  constructor( 
    private router: Router,
    private loginService: LoginService,
    private userService: UsuarioService)
    { }

  ngOnInit(): void {
    this.loginService.getCSRF().subscribe( (success: any) => {
      console.log(success)
    }, error => {
      console.log(error)
    } )
  }

  login(){
    if(this.formLogin.invalid){
      alert`Preencha todos os campos`
    }
    else{
      this.loginService.login(this.formLogin.value).subscribe( (success: any) => {
        this.userService.setToken(success.content.token)
        this.router.navigateByUrl('home')
      }, error => [
        console.log('Erro na autenticação')
      ] )
    }
  }


}
