import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/interfaces/transaction';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  transactions: Transaction[] = [];
  status: string = '';
  assetID: string = '';
  constructor(private transaction: TransactionService) {}

  ngOnInit(): void {
    this.showInvoiceToBuyer();
    //this.acceptAsset();
  }

  async showInvoiceToBuyer() {
    (await this.transaction.showInvoices()).subscribe({
      next: (res: any) =>
        console.log((this.transaction = res['userTransactions'])),
    });

    //  async acceptAsset(status:string) {
    //    this.status = 'accept';
    //    (await this.transaction.acceptAsset(this.status)).subscribe({
    //      next: (res: any) => console.log((this.transaction = res)),
    //    });
    //  }
  }
}
