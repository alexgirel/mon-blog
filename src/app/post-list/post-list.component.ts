import { Component, OnInit } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Post } from '../post-list-item/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  listPosts: Post[] = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",  0 ),
    new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",  5 ),
    new Post("Mon troisième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",  -4 )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
