import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  backgroundToggle = false;
  toggle = true;
  /* Для директив*/
  isVisible = false;
  isVisibleIfNote = true;
  isVisibility = true;
  /* пайпы */
  pi: number = Math.PI;
  str: string = 'hello world';
  float: number = 0.55;
  obj = {
    a: 1,
    b: {
      c: 3,
      f: {
        d: 'test'
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
