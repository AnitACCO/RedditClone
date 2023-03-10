import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubredditModel} from './subreddit.respose';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http : HttpClient) { }

    createSubreddit(subredditModel: SubredditModel) : Observable<SubredditModel>{
    return this.http.post<SubredditModel>('http://localhost:8080/api/subreddit', subredditModel);
  }

  getAllSubreddits(): Observable<SubredditModel[]> {
    return this.http.get<SubredditModel[]>('http://localhost:8080/api/subreddit')
  }
}
