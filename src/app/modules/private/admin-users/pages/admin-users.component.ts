import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdminUsersService } from '../services/admin-users.service';
import { Subscription } from 'rxjs';
import { SwitchService } from '@shared/services/switch.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertsService } from '@shared/services/alerts.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  formUser: FormGroup = new FormGroup({});

  constructor(
    private getService: AdminUsersService,
    private cookieService: CookieService,
    private Switch: SwitchService,
    private alertSevice: AlertsService
  ) {}

  usersData: Array<any> = [];
  usersDataId: any = {};
  stateLoaging: boolean = true;
  stateError: boolean = false;
  numData: number = 0;
  modalSwitch: boolean = false;
  modalBackground: boolean = false;
  stateDelete: boolean = false;
  disabled: boolean = true;
  statePassword: boolean = false;
  Tooltips: any = [
    {
      body: 'Editar',
    },
    {
      body: 'Eliminar',
    },
  ];

  usersSubscription: Subscription = new Subscription();
  modalUsers: Subscription = new Subscription();

  ngOnInit(): void {
    this.formUser = new FormGroup({
      first_name: new FormControl({ value: '', disabled: this.disabled }),
      last_name: new FormControl({ value: '', disabled: this.disabled }),
      username: new FormControl({ value: '', disabled: this.disabled }),
      email: new FormControl({ value: '', disabled: this.disabled }),
      password: new FormControl({ value: '', disabled: this.disabled }),
      phone_number: new FormControl({ value: '', disabled: this.disabled }),
      is_active: new FormControl({ value: '', disabled: this.disabled }),
      is_staff: new FormControl({ value: '', disabled: this.disabled }),
      is_admin: new FormControl({ value: '', disabled: this.disabled }),
      is_superadmin: new FormControl({ value: '', disabled: this.disabled }),
    });

    this.getUsers();

    this.modalUsers = this.Switch.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });

    this.modalUsers = this.Switch.$modalBackground.subscribe((value) => {
      this.stateDelete = value;
      this.desactiveForm();
      this.modalBackground = value;
      this.statePassword = false;
    });
  }

  openModal(id: any) {
    this.userId(id);
    this.modalSwitch = true;
    this.modalBackground = true;
  }

  activeForm() {
    this.disabled = false;
    this.formUser.enable();
    this.formUser.patchValue(this.usersDataId);
  }

  desactiveForm() {
    this.disabled = true;
    this.formUser.disable();
  }

  getUsers() {
    const users$ = this.getService.getUsers();
    this.usersSubscription = users$.subscribe({
      next: (data) => {
        this.usersData = data.results;
        this.stateLoaging = false;
      },
      error: (error) => {
        console.log(error);
        this.stateError = true;
      },
    });
  }

  userId(id: any) {
    this.getService.getUsersid(id).subscribe({
      next: (data) => {
        this.usersDataId = data;
        this.usersDataId.password = '';
        this.numData = this.usersDataId.first_name.length;
        console.log(this.usersDataId);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  putUserActive() {
    this.disabled = false;
    this.activeForm();
    this.alertInfo('Información', 'El usuario se puede editar');
  }

  putUserDesactive() {
    this.formUser.disable();
    this.disabled = true;
    this.statePassword = false;
    this.alertInfo('Información', 'El usuario no se puede editar');
  }

  onSubmit(id: any, data: any) {
    console.log(data);
    this.getService.putUser(id, data).subscribe({
      next: (data) => {
        console.log(data);
        this.alertSuccess(
          'Usuario editado',
          `El usuario ${data.username} ha sido editado exitosamente`
        );
        this.modalSwitch = false;
        this.modalBackground = false;
        this.statePassword = false;
        this.desactiveForm();
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
        this.alertDanger('Error', 'Ha ocurrido un error al editar el usuario');
      },
    });
  }

  deleteUserModal() {
    this.stateDelete = true;
  }

  deleteUser(UserDataId: any) {
    this.getService.deleteUser(UserDataId.id).subscribe({
      next: (data) => {
        console.log(data);
        this.alertSuccess(
          'Usuario eliminado',
          `El usuario ${UserDataId.first_name} ha sido eliminado correctamente`
        );
        this.stateDelete = false;
        this.modalSwitch = false;
        this.modalBackground = false;
        this.desactiveForm();
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
        this.stateDelete = false;
        this.alertDanger('Error', 'Ha ocurrido un error al eliminar el usuario');
      },
    });
  }

  changePassword() {
    this.statePassword = true;
  }

  alertSuccess(title: string, message: string) {
    this.alertSevice.showAlert(title,message, 5000, 'success');
  }

  alertDanger(title: string, message: string){
    this.alertSevice.showAlert(title,message, 5000, 'danger');
  }

  alertWarning(title: string, message: string){
    this.alertSevice.showAlert(title,message, 5000, 'warning');
  }

  alertInfo(title: string, message: string){
    this.alertSevice.showAlert(title,message, 5000, 'info');
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
    this.modalUsers.unsubscribe();
  }
}
