import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon'


import { AppRoutingModule } from '../app-routing.module';
import { PetCardComponent } from './pet-card/pet-card.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    ButtonComponent,
    NavBarComponent,
    PetCardComponent,
    CommentsComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MaterialModule
  ],
  exports: [
    ButtonComponent,
    NavBarComponent,
    PetCardComponent,
    CommentsComponent
  ]
})
export class ComponentsModule { }
