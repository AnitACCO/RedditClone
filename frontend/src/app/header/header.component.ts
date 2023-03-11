import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logout() {
  this.authService.logout();
  this.isLoggedIn = false;
  this.router.navigateByUrl('')
}
  faUser = faUser;
  isLoggedIn!: boolean ;
  username: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.username.subscribe((data: string) => this.username = data);
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }
}
