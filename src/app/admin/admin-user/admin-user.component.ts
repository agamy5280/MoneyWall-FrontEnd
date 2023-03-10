import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss'],
})
export class AdminUserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  async getAllUsers() {
    (await this.userService.getUsers()).subscribe({
      next: (res: any) => console.log((this.users = res)),
      error: (err: any) => {},
      complete: () => {},
    });
  }
}
