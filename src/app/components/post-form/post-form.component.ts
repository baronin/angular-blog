import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../../pages/posts/posts.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {

  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput') inputRef: ElementRef;
  addPost(): any {
    if (this.title.trim() && this.text. trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
      this.inputRef.nativeElement.focus();
    }
  }
}
