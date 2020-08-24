import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  employees:Employee[];
  constructor() {
    this.employees=[{
      customerId:1,
      name:"test",
      lastName:"test",
      middleName:"test",
      fatherName:"test",
      mobileNumber:"985456852",
      email:"abc@gmail.com",
      aadharNo:452145214521,
      dateOfBirth:"21/05/98",
      localAddressResi:"test",
      regionIdResi:1,
      addressPerm:"test",
      regionIdPerm:1,
      occupation:"test",
      annualIncome:500000,
      debitCardStatus:true,
      netBankingStatus:true
    }]
   }

  ngOnInit(): void {
  }
  @Input() name:string;

}

export class Employee{
  customerId:number;
  name:string;
  lastName:string;
  middleName:string;
  fatherName:string;
  mobileNumber:string;
  email:string;
  aadharNo:number;
  dateOfBirth:string;
  localAddressResi:string;
  regionIdResi:number;
  addressPerm:string;
  regionIdPerm:number;
  occupation:string;
  annualIncome:number;
  debitCardStatus:boolean;
  netBankingStatus:boolean;

}