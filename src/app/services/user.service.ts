import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  StorageService: StorageService = new StorageService;

  // constructor(private storageService: StorageService) {

  // }

  getUserData(){

    let data =JSON.stringify(this.StorageService.getUserDataFromLocalStorage());
    return JSON.parse(data).data;
  }
  getUserID(){
    return  this.getUserData().id;
  }

  user_accessToken(){
    return  this.getUserData().access_token;
  }

}
