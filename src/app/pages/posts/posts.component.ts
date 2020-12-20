import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

export interface Post {
  title: string;
  text: string;
  id?: number;
  time: object;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  search: string = '';
  posts: Post[] = [ {
    title: 'Learn English',
    text: 'You',
    id: 1,
    time: new Date('December 17, 1995 03:24:00'),
  },
    {
      title: 'Learn Spanish',
      text: 'You need to learn if you hope for a better life',
      id: 4,
      time: new Date('November 22, 2001 03:24:00'),
    },
    {
      title: 'Learn Angular',
      text: 'You need to learn if you hope for a better life',
      id: 2,
      time: new Date('Mart 17, 2007 03:24:00'),
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
