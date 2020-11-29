import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  backgroundToggle = false;

  posts: Post[] = [ {
    title: 'Learn English',
    text: 'Some text',
    id: 1,
  },
    {
      title: 'Learn Spanish',
      text: 'Some text two',
      id: 4,
    },
    {
      title: 'Learn Angular',
      text: 'Some text three',
      id: 2,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
