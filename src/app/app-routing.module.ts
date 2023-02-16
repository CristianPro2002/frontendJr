import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionAdminGuard } from '@core/guards/session-admin.guard';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/public/home/pages/home-page/home-page.component';
import { MajorAdminComponent } from '@modules/private/major-admin/pages/major-admin.component';

const routes: Routes = [
  {
    path: 'major',
    loadChildren: () => import('./modules/public/major/major.module').then(m => m.MajorModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'major-admin',
    component: MajorAdminComponent,
    loadChildren: () => import('./modules/private/major-admin/major-admin.module').then(m => m.MajorAdminModule),
    canActivate: [SessionAdminGuard]
  },
  {
    path: '',
    component:  HomePageComponent,
    loadChildren: () => import('./modules/public/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
