import { Component, OnInit } from '@angular/core';
import { DashPassword } from "../dto-classes/DashPassword";
import { ForgetPasswordService } from "../Customer.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  
  constructor(private service:ForgetPasswordService) { }

  ngOnInit(): void {
  }

  dashPassword= new DashPassword;
  setPass(){
    console.log(this.dashPassword);
    this.service.setDashPass(this.dashPassword).subscribe(
      data=>{
        alert(JSON.stringify(data));
        //if(data.status == 'Success'){
         // this.router.navigate(['/loginLink']);
        //}
      }
    )
  }

}
