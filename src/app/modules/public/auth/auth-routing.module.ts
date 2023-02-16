import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    outlet: 'child-home'
  },
  {
    path: '**',
    redirectTo: '/auth' //si no encuentra la ruta redirige a login
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
