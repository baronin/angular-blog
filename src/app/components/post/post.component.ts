import {Component, OnInit, Input, ContentChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Post} from '../../pages/posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  number = 45;
  inputValue = '';

  constructor() { }
  @Input() myPost: Post;
  @Output() onRemove = new EventEmitter<number>();

  @ContentChild('info', {static: true}) infoRef: ElementRef;
  ngOnChanges(): any {
    console.log('ngOnChange: ', this.infoRef);
  }

  ngOnInit(): any {
    console.log('ngOnInit: ', this.infoRef);
  }

  remove(idPost): any {
    this.onRemove.emit(this.myPost.id);
  }
}
