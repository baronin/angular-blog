import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../../pages/posts/posts.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {
  constructor() {
  }

  title = '';
  text = '';
  time = new Date();

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput') inputRef: ElementRef;

  ngOnInit(): void {
  }
  addPost(): any {
    if (this.title.trim() && this.text. trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        time: this.time,
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
      this.inputRef.nativeElement.focus();
    }
  }
}
