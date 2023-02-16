import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private alertSource = new Subject<any>();
  alert$ = this.alertSource.asObservable();

  private alertAddSource = new Subject<any>();
  alertAdd$ = this.alertAddSource.asObservable();

  constructor() { }

  showAlert(title: string, message: string, time: number = 5000, type: string) {
    this.alertSource.next({title, message, time, type});
  }
}
