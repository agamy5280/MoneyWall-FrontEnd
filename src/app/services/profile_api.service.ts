import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { UserService } from 'src/app/services/user.service';


import { User } from '../Interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    user:UserService=new UserService;
    //  headers:HttpHeaders=new HttpHeaders;
  constructor(private http: HttpClient) {


   }


  async updateProfileRequest(userInfo: object,id:string) {
    // let headers = new HttpHeaders()
    // .set('Authorization', 'Bearer ' + this.user.user_accessToken())
    // .set('Content-Type', 'application/json')
    // .set('InstanceName', 'ORISSA');
    // this.headers = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);


    return this.http.patch(`${environment.apiURL}user/profile/update/${id}`, userInfo,{headers:this.user.user_accessToken()} );
   }
 
}
