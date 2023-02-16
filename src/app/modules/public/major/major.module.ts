import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajorRoutingModule } from './major-routing.module';
import { MajorPageComponent } from './pages/major-page.component';


@NgModule({
  declarations: [
    MajorPageComponent
  ],
  imports: [
    CommonModule,
    MajorRoutingModule
  ]
})
export class MajorModule { }
