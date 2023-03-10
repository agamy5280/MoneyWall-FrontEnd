import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  bills: Bill[] = [];

  //@Input() bill: Bill = {} as Bill;

  userId: string = '';

  constructor(
    public userService: UserService,
    private billService: BillService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.userId = this.userService.getUserID();
    this.getBills();
    console.log(this.bills);
  }
  async getBills() {
    (await this.billService.getBills(this.userId)).subscribe({
      next: (res: any) => console.log((this.bills = res)),
      error: (err: any) => {},
      complete: () => {},
    });
  }
  //user
  signOut() {
    this.userService.signOut();
  }
}
