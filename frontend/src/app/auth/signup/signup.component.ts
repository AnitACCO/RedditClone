import { Component, OnInit } from '@angular/core';
import { SignupRequest } from './signupRequest';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupRequest : SignupRequest;
  signupForm : FormGroup;


  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.signupRequest ={
      username: '',
      email: '',
      password: ''
    }
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@accolitedigital.com")]),
      password: new FormControl('', Validators.required),
    });
  }

  signup(){
    this.signupRequest.email = this.signupForm.get('email')?.value;
    this.signupRequest.password = this.signupForm.get('password')?.value;
    this.signupRequest.username = this.signupForm.get('username')?.value;

    this.authService.signup(this.signupRequest)
    .subscribe(data => {
      this.router.navigate(['/login'],
        { queryParams: { registered: 'true' } });
    }, error => {
      console.log(error);
      this.toastr.error('Registration Failed! Please try again');
    });
  }

}
