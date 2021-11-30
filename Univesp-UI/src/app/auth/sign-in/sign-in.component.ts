import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formSignIn = new FormGroup({
    Nome: new FormControl('', Validators.required),
    DataNasc: new FormControl('', Validators.required),
    Celular: new FormControl('', Validators.required),
    EmailAcesso: new FormControl('', Validators.required),
    Senha: new FormControl('', Validators.required),
    ConfSenha: new FormControl('', Validators.required),
    EndRua: new FormControl(''),
    Numero: new FormControl(''),
    Bairro: new FormControl(''),
    Cidade: new FormControl('Hortolândia', Validators.required),
    Complemento: new FormControl(''),
    BitInstit: new FormControl(false),
    NomeInstit: new FormControl('', Validators.required),
    SiteInstit: new FormControl(''),
    SobreInstit: new FormControl(''),
  })

  constructor( 
    private router: Router,
    private Auth: LoginService
     ) { }

  ngOnInit(): void {
  }

  signin(){
    if(this.formSignIn.invalid){
      alert`Preencha todos os campos`
    }
    else{

      console.log(this.formSignIn)

      this.Auth.signIn(this.formSignIn.value).subscribe( (success:any) => {
        alert('Cadastro realizado com sucesso!')
        this.router.navigateByUrl('login')
      }, erro =>{
        console.log('Ocorreu um erro' + erro)
      } )

    }
  }
}
