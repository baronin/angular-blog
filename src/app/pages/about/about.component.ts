import {Component, OnInit} from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  message: any = 'Click on a button';
  textBtnConfig: object = {
    styles: {
      display: 'inline-block',
      color: 'white',
    },
    buttonClass: 'button',
    text: 'Button text',
  };
  imageButtonConfig: object = {
    styles: {
      position: 'relative',
      maxWidth: '100px',
      width: '100%',
    },
    src: '../../assets/img/bg-header.jpg'
  };

  bgColorAlertBlock: '';

  constructor() {
  }

  onClickEventReceived(event: string): any {
    console.log('console: ', event);
    this.message = event;
  }

  ngOnInit(): void {
  }

  addTest(e): any {
    this.bgColorAlertBlock = e.target.classList[1];
  }
}
