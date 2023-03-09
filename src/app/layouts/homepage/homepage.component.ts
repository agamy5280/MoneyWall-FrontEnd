import { Component } from '@angular/core';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  name = 'MoneyWall';
  constructor(public userService: UserService) {}
}
