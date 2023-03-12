import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}
  async sendTransaction(body: object) {
    return this.http.post(`${environment.apiURL}user/sellassetrequest`, body);
  }
  async acceptAsset(status: string) {
    return this.http.post(
      `${environment.apiURL}user/changeassetequitey`,
      status
    );
  }
  async showInvoices() {
    return this.http.get(`${environment.apiURL}user/userassetstransactions`);
  }
}
