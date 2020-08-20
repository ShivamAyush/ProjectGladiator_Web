import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.css']
})
export class AdminVerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  d1=new Verification("John","8447711059","12542","456","abc@xyx","savings","1500","Service");
  d2=new Verification("Marc","9941920645","12542","4753","refc@xyx","savings","1500","Service");
  d3=new Verification("Jill","9999444420","12542","95145","acdgb@xyx","current","1500","Business");
  d4=new Verification("Pepe","9945530581","12542","478855","abcaas@xyx","corporate","1500","Self");
  d5=new Verification("jack","8976490765","12542","765768","xyz@xyx","current","1500","Self");

  row:Verification[] = [this.d1,this.d2,this.d3,this.d4,this.d5];

 
  deleteRow(x){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  }



}

export class Verification{
  name:string;
  serialReferenceNumber:number;
  aadharNumber:number;
  mobileNumber:number;
  email:string;
  accountType:string;
  annualIncome:number;
  occupation:string;
  constructor(name,serialReferenceNumber,aadharNumber,mobileNumber,email,accountType,annualIncome,occupation){
      this.name=name;
      this.serialReferenceNumber=serialReferenceNumber;
      this.aadharNumber=aadharNumber;
      this.mobileNumber=mobileNumber;
      this.email=email;
      this.accountType=accountType;
      this.annualIncome=annualIncome;
      this.occupation=occupation;
    }

}
