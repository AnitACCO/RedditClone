import { Component } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostModel } from '../shared/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts : PostModel[] = []

  constructor(private postService : PostService){
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
      console.log(this.posts)
    });
  }

}
