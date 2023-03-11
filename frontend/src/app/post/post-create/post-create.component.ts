import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';
import { SubredditModel } from 'src/app/subreddit/subreddit.respose';
import { SubredditService } from 'src/app/subreddit/subreddit.service';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subreddits: SubredditModel[] = [];

  constructor(private router : Router, private postService: PostService, private subredditService: SubredditService){
    this.postPayload = {
      postName:'',
      url: '',
      description: '',
      subredditName: ''
    }

    this.createPostForm = new FormGroup({
      postName: new FormControl('',Validators.required),
      subredditName: new FormControl('',Validators.required),
      url : new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe((data)=> {
      this.subreddits = data;
    },error => {
      throwError(error)
    });
  }

  createPost(){
    this.postPayload.postName = this.createPostForm.get('postName')?.value;
    this.postPayload.description = this.createPostForm.get('description')?.value;
    this.postPayload.url = this.createPostForm.get('url')?.value;
    this.postPayload.subredditName = this.createPostForm.get('subredditName')?.value;

    this.postService.createPost(this.postPayload).subscribe((data) =>{
      this.router.navigateByUrl('/');
    },error =>{
      throwError(error);
    });
  }

  discardPost(){
    this.router.navigateByUrl('/');
  }
}
