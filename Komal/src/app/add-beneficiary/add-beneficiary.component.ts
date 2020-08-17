import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  d1=new Beneficiary("John","8447711059");
  d2=new Beneficiary("Marc","9941920645");
  d3=new Beneficiary("Jill","9999444420");
  d4=new Beneficiary("Pepe","9945530581");
  row:Beneficiary[] = [this.d1,this.d2,this.d3,this.d4];

 
  addName:string;
  addAccountNumber:string;
  addTable() {
  
    var addBtn = confirm("Do you want to add a contact?");
    if (addBtn == true)
    {
      this.isShow=false;
    const obj = {
      name: this.addName,
      accountNumber: this.addAccountNumber
    }
    this.row.push(obj);
  }
    this.addName=null;
    this.addAccountNumber=null;
  }

  deleteRow(x){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  }

  

  isShow:boolean=false;
  show(){
    this.isShow=true;
  }

  hide(){
    this.isShow=false;
  }
  
 

}

export class Beneficiary{
  name:string;
  accountNumber:string;

  constructor(name,accountNumber ){
      this.name=name;
      this.accountNumber=accountNumber;
  }
}