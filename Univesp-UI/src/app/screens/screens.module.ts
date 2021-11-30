import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ScreensRoutingModule } from './screens-routing.module';
import { ScreensComponent } from './screens.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { RegisterPetComponent } from './register-pet/register-pet.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    ScreensComponent,
    HomeComponent,
    RegisterPetComponent,
    ProfileComponent,
    ProfileUserComponent,
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScreensModule { }
