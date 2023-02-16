import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './pages/admin-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminUsersComponent,
    outlet: 'child-admin'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule { }
