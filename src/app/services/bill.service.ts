import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class BillService {
  
  constructor(private http: HttpClient, private userService: UserService) {}
  async getBills(id: string) {
    return this.http.get(`${environment.apiURL}admin/bill/show/${id}`);
  }

  
  async getUserBills(id: string) {
    return this.http.get(`${environment.apiURL}admin/bill/show/${id}`);
  }

  async getAllBills() {
    return this.http.get(`${environment.apiURL}admin/bill/`);
  }
}
