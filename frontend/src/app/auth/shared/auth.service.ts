import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map, Observable } from 'rxjs';
import { LoginRequest } from '../login/loginRequest';
import { LoginResponse } from '../login/loginResponse';
import { SignupRequest } from '../signup/signupRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient, private localStorage : LocalStorageService) { }

  signup(signupRequest : SignupRequest): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequest, {responseType: 'text'});
  }

  login(loginRequest : LoginRequest): Observable<any> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login', loginRequest).pipe(map(data => {
      this.localStorage.store('authenticationToken', data.authenticationToken);
      this.localStorage.store('username', data.username);
      this.localStorage.store('refreshToken', data.refreshToken);
      this.localStorage.store('expiresAt', data.expiresAt);

      return true;
    }));
  }
}
