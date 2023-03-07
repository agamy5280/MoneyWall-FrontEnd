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
     console.log(this.user.user_accessToken())
     console.log(this.user.getUserData())

    

      
    const accesToken="ZShGf956xv394RhT6SLwz6nli0XetcndW9yKj6uJUVVUBHKrKu7EqRPTl4fiFyZpxVi8NidZsBw4EeSWyc4k8ulVOvJof1Qd6jKs";
    
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +this.user.user_accessToken()
   });

  //  const reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + g);

    // let head_obj=new HttpHeaders().set("Authorization","Bearer"+accesToken)
    return this.http.patch(`${environment.apiURL}user/profile/update/${41}`, userInfo,{headers:reqHeader} );
   }
 
}
