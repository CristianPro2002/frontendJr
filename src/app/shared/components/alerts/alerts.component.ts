import { Component, OnInit } from '@angular/core';
import { AlertsService } from '@shared/services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent implements OnInit {
  showAlert: boolean = false;
  dataInfo: Array<any> = [];
  dataAlert: any = {};

  title: string = '';
  message: string = '';
  constructor(private alertService: AlertsService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((data: any) => {
      this.dataAlert = data;
      this.dataInfo.push(this.dataAlert);
      this.title = data.title;
      this.message = data.message;

      this.showAlert = true;
      setTimeout(() => {
        this.dataInfo.shift();
      }, data.time - 600);
      if (this.dataInfo.length === 0) {
        setTimeout(() => {
          this.showAlert = false;
        }, 500);
      }
    });
  }
}
