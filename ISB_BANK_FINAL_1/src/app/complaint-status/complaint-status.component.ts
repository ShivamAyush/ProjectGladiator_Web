import { Component, OnInit } from '@angular/core';
import {ComplaintStatus  } from './ComplaintStatus';
import { ComplaintService } from '../complaint.service';
import { ComplaintNo } from "./ComplaintNo";

@Component({
  selector: 'app-complaint-status',
  templateUrl: './complaint-status.component.html',
  styleUrls: ['./complaint-status.component.css']
})
export class ComplaintStatusComponent implements OnInit {
  complaintStatus:ComplaintStatus;
  cNo:ComplaintNo = new ComplaintNo();

  constructor(private complaintService:ComplaintService) { }
  images = ["/assets/459CT.png", "/assets/RBSKW.png", "/assets/W93BX.png"]
  imagePath=this.images[Math.floor(Math.random() * this.images.length)];
  ngOnInit(): void {
  }

  showStatus()
  {
      this.complaintService.checkVisitorStatus(this.cNo).subscribe(complaintStatus=>{
        this.complaintStatus = new ComplaintStatus();
        this.complaintStatus.complaintNo = this.cNo.complaintNo;
        this.complaintStatus.status = complaintStatus.status;
      }
    )
  }

}
