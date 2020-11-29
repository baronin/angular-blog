import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../../pages/posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  number = 45;
  inputValue = '';

  @Input() myPost: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
