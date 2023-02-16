import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPublicationsRoutingModule } from './admin-publications-routing.module';
import { AdminPublicationsComponent } from './pages/admin-publications.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminPublicationsComponent
  ],
  imports: [
    CommonModule,
    AdminPublicationsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdminPublicationsModule { }
