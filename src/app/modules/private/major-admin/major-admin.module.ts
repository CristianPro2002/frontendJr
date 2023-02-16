import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajorAdminRoutingModule } from './major-admin-routing.module';
import { MajorAdminComponent } from './pages/major-admin.component';
import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';


@NgModule({
  declarations: [
    MajorAdminComponent
  ],
  imports: [
    CommonModule,
    MajorAdminRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InjectSessionInterceptor, multi: true }
  ]
})
export class MajorAdminModule { }
