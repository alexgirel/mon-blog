import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  btnLoveIt: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onLoveIt() {
    //this.btnLoveIt++;
    //this.post.loveIts = this.btnLoveIt;
    this.post.loveIts++;
  }

  onDontLoveIt() {
    this.btnLoveIt--;
    this.post.loveIts = this.btnLoveIt;
  }

}
