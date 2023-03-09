import { Component } from '@angular/core';
import { faArrowDown, faArrowUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent {
  posts$ : PostModel[] | undefined;

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  faComments = faComments;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
      console.log(this.posts$)
    });
  }

}
