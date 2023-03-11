import { Component } from '@angular/core';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { PostModel } from 'src/app/shared/post-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  name: string = '';
  posts: PostModel[] = [];
  comments: CommentPayload[] = [];
  postLength: number = 0;
  commentLength: number = 0;
}
