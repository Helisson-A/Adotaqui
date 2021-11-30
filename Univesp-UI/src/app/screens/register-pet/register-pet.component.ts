import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PetRegisterService } from 'src/app/services/pet-register.service';

@Component({
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.scss']
})
export class RegisterPetComponent implements OnInit {

  constructor(
    private petRegister: PetRegisterService,
    private Router: Router
  ) { }

  formCadPet = new FormGroup({
    NomeAnimal: new FormControl('', Validators.required),
    IdEspecie: new FormControl('', Validators.required),
    Sexo: new FormControl('', Validators.required),
    ImagemAnimal: new FormControl('', Validators.required),
    Porte: new FormControl('', Validators.required),
    Imagem: new FormControl('',),
    BitCastrado: new FormControl('',),
    BitVacinado: new FormControl('',),
    BitVermifugado: new FormControl('',),
    DescricaoAnimal: new FormControl('',),
  })

  ngOnInit(): void {
  }

  submit(){
    if(this.formCadPet.valid){
      this.petRegister.postPet( this.formCadPet.value ).subscribe( success => {
        alert('pet cadastrado com sucesso')
        this.Router.navigateByUrl('home')

      }, error => {
        alert('ocorreu um erro')
        console.log(error);
      })
    } 
    else{
      alert('Preencha todos os campos')
    }
  }
}
