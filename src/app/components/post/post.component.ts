import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  number = 45;
  inputValue = '';

  constructor() { }

  ngOnInit(): void {
  }

}
