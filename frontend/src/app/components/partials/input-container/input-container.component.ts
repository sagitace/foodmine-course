import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit {

  @Input()
  label!:string;
  @Input()
  bgColor = '#9A7B4F';

  constructor() { }

  ngOnInit(): void {
  }

}
