import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubredditModel} from '../subreddit.respose';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-subreddit-create',
  templateUrl: './subreddit-create.component.html',
  styleUrls: ['./subreddit-create.component.css']
})
export class SubredditCreateComponent {

  createSubredditForm : FormGroup;
  subredditModel : SubredditModel;

  constructor(private subredditService: SubredditService, private router: Router) {
    this.createSubredditForm = new FormGroup({
      title : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required)
    })
    this.subredditModel = {
      name : '',
      description : ''
    }
  }

  createSubreddit() {
    this.subredditModel.name = this.createSubredditForm.get('title')?.value;
    this.subredditModel.description = this.createSubredditForm.get('description')?.value;
    this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
      this.router.navigateByUrl('listSubreddits');
    }, error=>{
      console.log("error occurred");
    })
  }

  discard() {
    this.router.navigateByUrl('/');
  }

}
