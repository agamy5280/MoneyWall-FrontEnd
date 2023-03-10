import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from 'src/app/services/user.service';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    user:UserService=new UserService;
  constructor(private http: HttpClient) {

   }


     // Update Profile information

  async updateProfileRequest(userInfo: object,id:string) {

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });

  
  return this.http.patch(`${environment.apiURL}user/profile/update/${id}`, userInfo,{headers:reqHeader} );
   }
 
   

  // Change Password
   async changeProfilePasswordRequest(userInfo: object,id:string) {

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });
    return this.http.patch(`${environment.apiURL}user/profile/changePassword/${id}`, userInfo,{headers:reqHeader} );
   }
 


   async deleteAccountRequest(userInfo: object,id:string) {
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });


   const data = {
    headers: reqHeader,
    body: JSON.stringify(userInfo)
 };
 //  return this.http.delete(`${environment.apiURL}user/profile/deleteAccount/${id}`,{headers:reqHeader}  );

  return this.http.delete(`${environment.apiURL}user/profile/deleteAccount/${id}`, data );
   }



   
   getUserRequest(id:string) {
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });
  return this.http.get(`${environment.apiURL}user//profile/show/${id}`,{headers:reqHeader} );

   }

}
