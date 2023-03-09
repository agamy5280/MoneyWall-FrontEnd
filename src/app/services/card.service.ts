import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from 'src/app/services/user.service';



@Injectable({
  providedIn: 'root'
})
export class CardService {
  user:UserService=new UserService;

  constructor(private http: HttpClient) {

  }





  async addCardRequest(userInfo: object,id:string) {

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });

  
  // return this.http.post(`${environment.apiURL}user/addcard/${id}`, userInfo,{headers:reqHeader} );
  return this.http.post(`${environment.apiURL}user/addcard/?id=${id}`, userInfo,{headers:reqHeader} );

   }
 

    getCardsRequest(id:string) {

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });

  
  return this.http.get(`${environment.apiURL}user/cards/${id}`,{headers:reqHeader} );

   }


   
  // getCardsRequest(id:string): any {
  //   let reqHeader = new HttpHeaders({ 
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' +this.user.user_accessToken()
  //      });
  //   return this.http.get(`${environment.apiURL}user/cards/${id}`,{headers:reqHeader});
  // }
 
   
}
