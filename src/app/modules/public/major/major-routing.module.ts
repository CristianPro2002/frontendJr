import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MajorPageComponent } from './pages/major-page.component';

const routes: Routes = [
  {
    path: '',
    component: MajorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajorRoutingModule { }
