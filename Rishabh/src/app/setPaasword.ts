import { Component, OnInit } from '@angular/core';
@Component({
selector:'app-setPassword',
template:`


<div class="row">
<div class="main">
    <div class="card" style="height: 540px;">
    <h3 style="text-align:right;">Set your New Password</h3>
 

  <form #setPasswordForm='ngForm' style="float:right;">

      <div class="container" style="text-align:center;border:2px solid black;
      border-radius: 10px;">
          <label for="newpassword"><b>Login Password</b></label>
          <input type="text" id="newpassword" required ngModel><br>

          <label for="newpassword1"><b>Confirm Password</b></label>
          <input type="tel" id="newpassword1" required ngModel><br><br>

          <div class="container" style="background-color:#f1f1f1;height:60px;width:80%">
          <button type="reset" class="cancelbtn">Reset</button>
          <button type="submit" class="proceed1" >Submit</button>
          <button class="proceed1" >
          <a [routerLink]="['/loginLink']" class="prcd">Login</a>
          </button>
          </div>
          </div> 
         
</form>
</div>
</div>
</div>

`,
styleUrls:['./main.css']

})

export class SetPasswordComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }