import { Component, Input, OnInit } from '@angular/core';
import { AdminUsersService } from '@modules/admin-users/services/admin-users.service';
import { SwitchService } from '@shared/services/switch.service';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {

  @Input() UserId:any = {}
  @Input() stateModal:boolean = false;
  @Input() modalBackground:boolean = false;

  constructor(private modalSwitch: SwitchService,private getUsers:AdminUsersService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalSwitch.$modal.emit(false)
    console.log(this.modalBackground)
    if(this.stateModal) {
      setTimeout(() => {
        this.modalSwitch.$modalBackground.emit(false)
      }, 500);
    }
  }


}
