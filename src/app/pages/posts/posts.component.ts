import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  backgroundToggle = false;
  toggle = true;

  posts: Post[] = [ {
    title: 'Learn English',
    text: 'You',
    id: 1,
  },
    {
      title: 'Learn Spanish',
      text: 'You need to learn if you hope for a better life',
      id: 4,
    },
    {
      title: 'Learn Angular',
      text: 'You need to learn if you hope for a better life',
      id: 2,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  updatePost(post: Post): any {
    this.posts.unshift(post);
  }
  removePost(id: number): any {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
