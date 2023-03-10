import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Interfaces/user';
import { Router } from '@angular/router';
import { Card } from '../../Interfaces/card';

@Component({
  selector: 'app-balancepage',
  templateUrl: './balancepage.component.html',
  styleUrls: ['./balancepage.component.scss']
})
export class BalancepageComponent {
   userId=""
   user: User = {} as User;
   cards: Card[] = [];
  balance:number | undefined;

   constructor(private userService: UserService,private cardService:CardService,private _router: Router){

  }
  
  

  ngOnInit(): void {
    this.user=  this.userService.getUserData();

    this.userId=this.userService.getUserID();    
    this.balance=this.user.balance;
    console.log(this.balance)
    this.getCards();  

  }

 

  async getCards() {
    (await this.cardService.getCardsRequest(this.userId)).subscribe({
      next: (res:any) => console.log(this.cards=res["cards"]),
      error: (err:any) =>  {},
      complete: () => {}

    })  
  }


}
