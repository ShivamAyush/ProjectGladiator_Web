import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-status',
  templateUrl: './visitor-status.component.html',
  styleUrls: ['./visitor-status.component.css']
})
export class VisitorStatusComponent implements OnInit {

  showStatus:Status[];
  constructor() { 
    this.showStatus=[{
      serialReferenceNumber:687,
      status:"Pending",
      verified:"Checked"
    }]
  }

  ngOnInit(): void {
  }

}

export class Status{
  serialReferenceNumber:number;
  status:string;
  verified:string;
}