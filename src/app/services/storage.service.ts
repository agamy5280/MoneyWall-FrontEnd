import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUserDataFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem('userData') || '[]');
  }

 
}
