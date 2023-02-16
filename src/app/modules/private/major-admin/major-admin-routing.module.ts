import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MajorAdminComponent } from './pages/major-admin.component';

const routes: Routes = [
  {
    path: 'admin-publications',
    loadChildren: ()=> import('../../../modules/private/admin-publications/admin-publications.module').then(m => m.AdminPublicationsModule)
  },
  {
    path: 'admin-users',
    loadChildren: ()=> import('../../../modules/private/admin-users/admin-users.module').then(m => m.AdminUsersModule)
  },
  {
    path: '**',
    redirectTo: '/major-admin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajorAdminRoutingModule { }
