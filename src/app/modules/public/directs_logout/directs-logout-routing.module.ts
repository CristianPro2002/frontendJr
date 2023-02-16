import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectsLogoutComponent } from './pages/directs-logout.component';

const routes: Routes = [
  {
    path: '',
    component: DirectsLogoutComponent,
    outlet: 'child-home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectsLogoutRoutingModule { }
