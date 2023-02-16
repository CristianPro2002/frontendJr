import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPublicationsComponent } from './pages/admin-publications.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPublicationsComponent,
    outlet: 'child-admin'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPublicationsRoutingModule { }
