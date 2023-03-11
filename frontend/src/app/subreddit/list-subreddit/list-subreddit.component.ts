import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { SubredditModel } from '../subreddit.respose';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent {
  subreddits: SubredditModel[] = [];
  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }
}
