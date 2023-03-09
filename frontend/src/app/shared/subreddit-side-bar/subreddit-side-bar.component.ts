import { Component } from '@angular/core';
import { SubredditModel } from 'src/app/subreddit/subreddit.respose';
import { SubredditService } from 'src/app/subreddit/subreddit.service';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent {
  subreddits!: SubredditModel[];
  displayViewAll: boolean = false;
  constructor( private subredditSetvice : SubredditService) {
    this.subredditSetvice.getAllSubreddits().subscribe(data =>{
      if(data.length >= 4){
        this.subreddits = data.splice(0,3);
        this.displayViewAll = true;
      }else{
        this.subreddits = data;
      }
    })
  }
}
