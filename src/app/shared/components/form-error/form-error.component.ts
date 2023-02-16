import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() formControlName: string = '';
  @Input() className!: string;

  control!: AbstractControl;
  formError: string = '';
  customErrorMessages: any;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    
  }

  setCustomErrorMessages(customErrorMessages: any, form: FormGroup) {
    (<any>form)._customErrorMessages = customErrorMessages;
  }

  getCustomErrorMessages(form: FormGroup) {
    return (<any>form)._customErrorMessages;
  }

}
