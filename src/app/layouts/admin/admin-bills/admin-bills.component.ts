import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/interfaces/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-admin-bills',
  templateUrl: './admin-bills.component.html',
  styleUrls: ['./admin-bills.component.scss']
})
export class AdminBillsComponent implements OnInit {
   bills :Bill []=[];
  constructor(public billService: BillService) {

  }
  ngOnInit(): void {
    this.getBills()
   console.log(this.bills)
  }



  async getBills() {
    (await this.billService.getAllBills()).subscribe({
      next: (res: any) => console.log(this.bills=res["bills"]),
      error: (err: any) => {},
      complete: () => {},
    });
  }

}
