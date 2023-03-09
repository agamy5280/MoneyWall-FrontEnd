import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Card } from '../../Interfaces/card';

@Component({
  selector: 'app-balancepage',
  templateUrl: './balancepage.component.html',
  styleUrls: ['./balancepage.component.scss']
})
export class BalancepageComponent {
   userId=""
  //  cards:Card={} as Card|any;
  cards: Card[] = [];
  // cards:any;

   constructor(private userService: UserService,private cardService:CardService,private _router: Router){

  }
  
  

  ngOnInit(): void {
    this.userId=this.userService.getUserID();    

    this.getCards();  
    console.log(this.cards)   

  }

 

  async getCards() {
    (await this.cardService.getCardsRequest(this.userId)).subscribe({
      next: (res:any) => console.log(this.cards=res["cards"]),
      error: (err:any) =>  {},
      complete: () => {}

    })  
  }


}
