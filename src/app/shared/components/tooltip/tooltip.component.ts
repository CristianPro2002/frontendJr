import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent implements OnInit {

  @Input() Content: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
