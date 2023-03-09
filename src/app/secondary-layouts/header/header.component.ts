import { Component, Input } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/auth/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public userService: UserService) {}
  signOut() {
    this.userService.signOut();
  }
}
