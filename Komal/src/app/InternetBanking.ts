import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  template: `
  <div class="row">
  <div class="main">
      <div class="card">
         <h2 style="text-align:right;"> Register for internet banking</h2>
          
         <form #internetregForm='ngForm' style="float:right;">
         <div class="container" style="text-align:center; border:2px solid black;
         border-radius: 10px;">
           <label for="Account"><b>Account Number</b></label><br>
           <input type="tel" placeholder="Enter Account Number" name="Account" id="Account" required ngModel><br>

           
          <label for="psw"><b>Set Login Password</b></label><br>
           <input type="password" placeholder="Enter Password" id="psw"><br>

           <label for="psw1"><b>Confirm Login Password</b></label><br>
           <input type="password" placeholder="Enter Password" id="psw1"><br>

           <label for="tpsw"><b>Set Transaction Password</b></label><br>
           <input type="password" placeholder="Enter Password" id="tpsw"><br>

           <label for="tpsw1"><b>Confirm Transaction Password</b></label><br>
           <input type="password" placeholder="Enter Password" id="tpsw1"><br>

           <button style="border: none;cursor: pointer;width:37%;padding: 8px 0px;margin:10px 7px">send OTP</button><label for="otp"><b>Enter Otp</b></label><br>
            <input type="tel" placeholder="Enter otp" id="otp"><br>

            <button type="submit" [disabled]="!internetregForm.valid">
            <a [routerLink]="['/loginLink']" class="prcd">Submit</a></button>
            </div>
            </form>       
      </div>
  </div>
</div>

  `,
  styleUrls: ['./main.css']
})

export class InternetBankingComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  