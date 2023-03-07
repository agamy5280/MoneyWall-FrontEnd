import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getUserdata(): any {
    // return this.httpClient.get(`${environment.apiUrl}categories/`);
    return this.httpClient.get('http://localhost:8000/api/1/profile/');

  }
}
