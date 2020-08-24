import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent implements OnInit {
  accountBalance:AccountBalance[];
  constructor() { 
    this.accountBalance=[{
      Name:"Komal",
      Account_Number:19819776889,
      Account_Type:"Salaried",
      Account_Balance:30000
    }]
  }
  ngOnInit(): void {
  }

}
export class AccountBalance{
  Name:String;
    Account_Number:Number;
    Account_Type:string;
    Account_Balance:Number;
  }