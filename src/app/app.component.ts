import { Component } from '@angular/core';
import { Post } from './post-list-item/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog';

  listPosts: Post[] = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" ),
    new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" ),
    new Post("Mon troisième post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" )
  ];
  
}
