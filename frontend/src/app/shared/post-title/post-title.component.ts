import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faArrowUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent {

  @Input() posts : PostModel[] = [];


  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  faComments = faComments;

  constructor(private postService: PostService,private router: Router) {

  }

  goToPost(id: number) {
    this.router.navigateByUrl('/view-posts/' + id);
  }
}
