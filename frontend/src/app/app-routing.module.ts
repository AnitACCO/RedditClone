import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { ListSubredditComponent } from './subreddit/list-subreddit/list-subreddit.component';
import { SubredditCreateComponent } from './subreddit/subreddit-create/subreddit-create.component';
import { AuthGuard } from './auth/auth.guard';

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
    component: SubredditCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createPost',
    component: PostCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'listSubreddits',
    component: ListSubredditComponent
  },
  {
    path : 'view-posts/:id',
    component: ViewPostComponent
  },
  {
    path : 'user-profile/:name',
    component : UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
