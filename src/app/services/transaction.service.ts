import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http: HttpClient) {}
  
  
  getTransBillsRequest() {
  
    return this.http.get(`${environment.apiURL}admin/TransactionBills` );
  
     }


     getTransAssetsRequest() {
  
      return this.http.get(`${environment.apiURL}admin/TransactionAssets` );
    
       }

       getTransMoneyRequest() {
  
        return this.http.get(`${environment.apiURL}admin/TransactionMoney` );
      
         }
  
}


