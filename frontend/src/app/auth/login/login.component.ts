import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { LoginRequest } from './loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup;
  loginRequest : LoginRequest;
  registerSuccessMessage: string = '';
  isError: boolean = false;

  constructor(private authService : AuthService, private activatedRoute : ActivatedRoute,
    private router : Router, private toastr: ToastrService) {
    this.loginRequest ={
      username: '',
      password: ''
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(){
    this.activatedRoute.queryParams
    .subscribe(params =>{
      if(params['registered']!== undefined && params['registered']==='true') {
        this.toastr.success("Signup successful")
        this.registerSuccessMessage = 'Please Check your inbox for activation email '
        + 'activate your account before you Login!';
      }
    })
  }
  login(){
    this.loginRequest.username = this.loginForm.get('username')?.value;
    this.loginRequest.password = this.loginForm.get('password')?.value;

    this.authService.login(this.loginRequest).subscribe(data => {
      this.isError = false;
      this.router.navigateByUrl('/');
      this.toastr.success('Login Successful');
    }, error => {
      this.isError = true;
      throwError(error);
    });
  }

}
