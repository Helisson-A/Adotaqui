import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';

const routes: Routes = [
  { path: 'login',
    loadChildren: () => 
      import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'main',
    loadChildren: () =>
      import('./screens/screens.module').then( m => m.ScreensModule), canActivate: [AppGuardGuard], canActivateChild: [AppGuardGuard], canLoad: [AppGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
