import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    ModalDetailComponent,
    TooltipComponent,
    AlertsComponent,
    SidebarComponent,
    ModalConfirmationComponent,
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTooltipModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    ModalDetailComponent,
    TooltipComponent,
    AlertsComponent,
    SidebarComponent,
    ModalConfirmationComponent,
    FormErrorComponent,
  ]
})
export class SharedModule { }
