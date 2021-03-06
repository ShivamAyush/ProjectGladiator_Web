import { Component, OnInit } from '@angular/core';
import {ComplaintService} from '../complaint.service'
import { ComplaintNo } from "../ComplaintNo";

@Component({
  selector: 'app-complaint-approval',
  templateUrl: './complaint-approval.component.html',
  styleUrls: ['./complaint-approval.component.css']
})
export class ComplaintApprovalComponent implements OnInit {

  constructor(private service:ComplaintService) { }
  data:any;
  complaintNo =new ComplaintNo();
  viewComplaints(){
    this.service.getComplaints().subscribe(data=>{
      this.data=data;
        })
      }

      Approve(x){
        this.complaintNo=this.data[x].complaintNo;
        alert(this.complaintNo);
        this.service.updateStatus(this.complaintNo).subscribe(data=>{  
              alert(JSON.stringify(data));     
               })
      }

  ngOnInit(): void {
  }

}
