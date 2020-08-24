import { Component, OnInit } from '@angular/core';
import { Complaint} from './Complaint';
import {ComplaintService} from '../complaint.service'
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor(private service : ComplaintService ) { }
  images = ["/assets/459CT.png", "/assets/RBSKW.png", "/assets/W93BX.png"]

  imagePath=this.images[Math.floor(Math.random() * this.images.length)];
  

  ngOnInit(): void {
  }

  checkCaptcha:string;
  complaint = new Complaint();
  message:string;
  message1:string;
  addComplaint()
  {
    if(this.complaint.accountNumber == null)
    {
      this.message1 = "Empty form can't be Submitted";
    }
    console.log(this.complaint.accountNumber);
    console.log(this.complaint.branchCode);
    console.log(this.complaint.categoryOfComplaint);
    console.log(this.complaint.complaintDesc);
    console.log(this.complaint.complaintNo);
    console.log(this.complaint.customerType);
    console.log(this.complaint.email);
    console.log(this.complaint.mobileNumber);
    console.log(this.complaint.nameComplaint);
    console.log(this.imagePath);
    console.log("/assets/"+this.complaint.captcha+".png");
    this.checkCaptcha = "/assets/"+this.complaint.captcha+".png";
    console.log(this.checkCaptcha);
    if(this.checkCaptcha == this.imagePath)
    {
     this.service.addComplaint(this.complaint).subscribe(data=>{
      alert(JSON.stringify(this.complaint));
    })
  }
  else
  {
    this.message = "Captcha Invalid";
  }
  }
}
