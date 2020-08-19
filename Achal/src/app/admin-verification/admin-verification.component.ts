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

  d1=new Verification("John","8447711059");
  d2=new Verification("Marc","9941920645");
  d3=new Verification("Jill","9999444420");
  d4=new Verification("Pepe","9945530581");
  row:Verification[] = [this.d1,this.d2,this.d3,this.d4];

 
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

  constructor(name,serialReferenceNumber ){
      this.name=name;
      this.serialReferenceNumber=serialReferenceNumber;
  }

}
