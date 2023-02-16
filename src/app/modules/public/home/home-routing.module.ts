import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../modules/public/directs_logout/directs-logout.module').then(m => m.DirectsLogoutModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../../../modules/public/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../../../modules/public/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
