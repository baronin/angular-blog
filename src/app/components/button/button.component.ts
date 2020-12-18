import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  @Output() textBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  @Output() imgBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onTextBtnClick(): any {
    this.textBtnClickEmt.emit('You have clicked on a text button.');
  }

  onImageButtonClick(): any {
    this.imgBtnClickEmt.emit('You have clicked on an image button.');
  }
}
