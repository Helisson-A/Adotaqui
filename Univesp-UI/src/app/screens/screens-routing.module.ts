import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterPetComponent } from './register-pet/register-pet.component';

import { ScreensComponent } from './screens.component';
import { ScreensGuard } from './screens.guard';

const routes: Routes = [
  { 
    path: '',
    component: ScreensComponent,
    children : [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'petregister', component: RegisterPetComponent, canActivate: [ScreensGuard]  },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'profileUser/:id', component: ProfileUserComponent, canActivate: [ScreensGuard]  }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
