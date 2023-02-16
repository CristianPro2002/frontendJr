import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPagesComponent } from './pages/register-pages.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPagesComponent,
    outlet: 'child-home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
