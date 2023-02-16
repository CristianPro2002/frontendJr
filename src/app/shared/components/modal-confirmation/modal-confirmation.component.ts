import { Component, Input, OnInit } from '@angular/core';
import { SwitchService } from '@shared/services/switch.service';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent implements OnInit {

  @Input() stateModal:boolean = false;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.switchService.$modalConfirmation.emit(false)
  }

}
