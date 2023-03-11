import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { ListSubredditComponent } from './subreddit/list-subreddit/list-subreddit.component';
import { SubredditCreateComponent } from './subreddit/subreddit-create/subreddit-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createSubreddit',
    component: SubredditCreateComponent
  },
  {
    path: 'createPost',
    component: PostCreateComponent
  },
  {
    path : 'listSubreddits',
    component: ListSubredditComponent
  },
  {
    path : 'view-posts/:id',
    component: ViewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
