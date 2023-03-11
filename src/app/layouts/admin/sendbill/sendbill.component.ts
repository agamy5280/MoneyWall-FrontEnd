import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillService } from '../../../services/bill.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sendbill',
  templateUrl: './sendbill.component.html',
  styleUrls: ['./sendbill.component.scss']
})
export class SendbillComponent implements OnInit {
  users: User[] = [];
  userId:string="";

  constructor(public billService:BillService,private _router: Router,private userService:UserService){}
 
  ngOnInit(): void {
       this.getAllUsers();

  }







  public sendBillForm = new FormGroup({
    company_name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    userID: new FormControl("", Validators.required),
    due_time: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
  })



 async sendBill(){
    (await this.billService.addBillRequest( this.sendBillForm.value)).subscribe({
      next: (res:any) => res,
      error: (err:any) =>  {alert("Error occurred, try again later")},
      complete: () => {alert("The Bill has been sent successfully"), this._router.navigate(['admin/bills']);}

    })  



  }

 

  

  async getAllUsers() {
    (await this.userService.getUsers()).subscribe({
      next: (res: any) => (this.users = res['users']),
      error: (err: any) => {},
      complete: () => {},
    });
  }

 

  }








