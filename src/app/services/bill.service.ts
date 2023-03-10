import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class BillService {
  //user: UserService = new UserService();
  constructor(private http: HttpClient, private userService: UserService) {}

  async getBills(id: string) {
    // let reqHeader = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Bearer ' + this.user.user_accessToken(),
    // });

    return this.http.get(`${environment.apiURL}admin/bill/show/${id}`);
  }
}
