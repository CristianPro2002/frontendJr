import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VideoService } from '../services/video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertsService } from '@shared/services/alerts.service';
import { SwitchService } from '@shared/services/switch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-publications',
  templateUrl: './admin-publications.component.html',
  styleUrls: ['./admin-publications.component.css'],
})
export class AdminPublicationsComponent implements OnInit {
  constructor(
    private Video: VideoService,
    private sanitazer: DomSanitizer,
    private alertSevice: AlertsService,
    private switchs: SwitchService
  ) {}

  formRegisterVideo: FormGroup = new FormGroup({});
  dataVideos: Array<any> = [];
  formatVideo: string = 'https://www.youtube.com/embed/';
  urlVideo: string = '';
  viewVideo: boolean = false;
  urlConvert: any;
  modalSwitch: boolean = false;
  modalBackground: boolean = false;
  modalUsers: Subscription = new Subscription();
  dataVideoId: any = {};
  stateLoading: boolean = true;
  modalConfirmation: boolean = false;
  idConfirm: any = 0;
  validateForm: boolean = false;
  prueba: boolean = false;
  animationMode: boolean = false;

  ngOnInit(): void {
    this.formRegisterVideo = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    });

    this.getVideos();

    this.modalUsers = this.switchs.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });

    this.modalUsers = this.switchs.$modalBackground.subscribe((value) => {
      this.modalBackground = value;
    });

    this.modalUsers = this.switchs.$modalConfirmation.subscribe((value) => {
      this.modalConfirmation = value;
    });
  }

  submitVideo(data?: any) {
    if (data.id === '') {
      this.validateForm = true;
      console.log(this.formRegisterVideo.value);
      this.Video.registerVideo(this.formRegisterVideo.value).subscribe({
        next: (data) => {
          console.log(data);
          this.alertSuccess(
            'Video registrado',
            'El video se ha registrado correctamente'
          );
          this.resetVideo();
          this.getVideos();
        },
        error: (error) => {
          console.log(error);
          this.resetVideo();
        },
      });
    } else {
      this.editVideo(data);
    }
  }

  getVideos() {
    this.Video.getVideos().subscribe({
      next: (data) => {
        console.log(data);
        this.dataVideos = data;
        if(data.length > 0){
          this.stateLoading = false;
        }else{
          this.stateLoading = true;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editVideo(data: any) {
    this.Video.editVideo(data).subscribe({
      next: (data) => {
        console.log(data);
        this.alertSuccess(
          'Video editado',
          'El video se ha editado correctamente'
        );
        this.resetVideo();
        this.getVideos();
      },
      error: (error) => {
        console.log(error);
        this.resetVideo();
      },
    });
  }

  deleteVideo(data: any) {
    this.Video.deleteVideo(data.id).subscribe({
      next: (data) => {
        console.log(data);
        this.alertSuccess(
          'Video eliminado',
          'El video se ha eliminado correctamente'
        );
        this.modalConfirmation = false;
        this.getVideos();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editFormData(data: any) {
    this.formRegisterVideo.patchValue({
      id: data.id,
      title: data.title,
      description: data.description,
      url: data.url,
    });
  }

  modalConfirmDelete(data: any) {
    this.validateModal(data);
    this.dataVideoId = data;
    this.modalConfirmation = true;
  }

  validateModal(data: any) {
    let dataId = data.id;
    this.dataVideos.forEach((item) => {
      if (dataId === item.id) {
        return (this.idConfirm = item.id);
      } else {
        return;
      }
    });
  }

  closeModalConfirmDelete() {
    this.modalConfirmation = false;
  }

  formatUrl(url: string) {
    this.urlVideo = this.formatVideo + url;
    return this.sanitazer.bypassSecurityTrustResourceUrl(this.urlVideo);
  }

  openVideo(url: string) {
    this.urlConvert = this.formatUrl(url);
    this.viewVideo = true;
    setTimeout(() => {
      this.animationMode = true;
    }, 500);
  }

  closeVideo() {
    this.animationMode = false;
    setTimeout(() => {
      this.viewVideo = false;
    }, 500);
  }

  resetVideo() {
    this.formRegisterVideo.patchValue({
      id: '',
      title: '',
      description: '',
      url: '',
    });
  }

  alertSuccess(title: string, message: string) {
    this.alertSevice.showAlert(title, message, 5000, 'success');
  }

  alertDanger(title: string, message: string) {
    this.alertSevice.showAlert(title, message, 5000, 'danger');
  }

  alertWarning(title: string, message: string) {
    this.alertSevice.showAlert(title, message, 5000, 'warning');
  }

  alertInfo(title: string, message: string) {
    this.alertSevice.showAlert(title, message, 5000, 'info');
  }
}
