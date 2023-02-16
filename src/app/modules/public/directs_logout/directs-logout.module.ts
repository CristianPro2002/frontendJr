import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectsLogoutRoutingModule } from './directs-logout-routing.module';
import { DirectsLogoutComponent } from './pages/directs-logout.component';


@NgModule({
  declarations: [
    DirectsLogoutComponent
  ],
  imports: [
    CommonModule,
    DirectsLogoutRoutingModule
  ]
})
export class DirectsLogoutModule { }
