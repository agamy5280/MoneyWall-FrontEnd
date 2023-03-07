import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  StorageService: StorageService = new StorageService;

  // constructor(private storageService: StorageService) {

  // }

  getData(){

    let data =JSON.stringify(this.StorageService.getUserDataFromLocalStorage());
    return JSON.parse(data);
  }


  getUserData(){

    return this.getData().data;
  }


  getUserID(){
    return  this.getUserData().id;
  }

  user_accessToken(){
    return  this.getData().access_token;
  }

}
