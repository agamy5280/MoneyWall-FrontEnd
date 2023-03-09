import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}
  async registerRequest(registerInfo: object) {
    return this.http.post(`${environment.apiURL}user/register`, registerInfo);
  }
  async LoginRequest(LoginInfo: object) {
    return this.http.post(`${environment.apiURL}user/login`, LoginInfo);
  }
  async resetPasswordRequest(email: object) {
    return this.http.post(
      `${environment.apiURL}user/resetpasswordrequest`,
      email
    );
  }
  async resetPassword(password: string, token: string) {
    const body = { password: password, token: token };
    return this.http.post(`${environment.apiURL}user/resetpassword`, body);
  }
}
