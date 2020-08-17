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
      <label for="psw"><b>Login Password</b></label><br>
      <input class="pswrd" type="password" placeholder="Enter Password" id="psw" required ngModel><span class="show">SHOW</span><br>

      <label for="psw"><b>Confirm Password</b></label><br>
      <input class="pswrd1" type="password" placeholder="Re-enter password" id="psw" required ngModel><span class="view">SHOW</span><br>

          <div class="container" style="background-color:#f1f1f1;height:60px;width:80%;margin-left:3px;">
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
      var input=document.querySelector('.pswrd');
  var show=document.querySelector('.show');
  show.addEventListener('click',active);
  function active(){

    if(this.input.type=== "password"){
      this.input.type="text";
      this.show. style.color="#1DA1F2";
      this.show.textContent= "HIDE";
    }
    else{
      this.input.type="password";
      this.show.textContent= "SHOW";
      this.show.style.color="#111";
    }
  }
  var input1=document.querySelector('.pswrd1');
  var show1=document.querySelector('.view');
  show1.addEventListener('click',active1);
  function active1(){
      if(this.input1.type === "password"){
        this.input1.type="text";
        this.show1.style.color="#1DA1F2";
        this.show1.textContent= "HIDE";
      }
      else{
        this.input1.type="password";
        this.show1.textContent= "SHOW";
        this.show1.style.color="#111";
      }

  //     if(input.type === "password"){
  //         input.type="text";
  //         show.style.color="#1DA1F2";
  //         show.textContent= "HIDE";
  //     }
  //     else{
  //       input.type="password";
  //       show.textContent= "SHOW";
  //       show.style.color="#111";
  //     }
  // }
  // var input1=document.querySelector('.pswrd1');
  // var show1=document.querySelector('.view');
  // show1.addEventListener('click',active1);
  // function active1(){
  //     if(input1.type === "password"){
  //       input1.type="text";
  //       show1.style.color="#1DA1F2";
  //       show1.textContent= "HIDE";
  //     }
  //     else{
  //       input1.type="password";
  //       show1.textContent= "SHOW";
  //       show1.style.color="#111";
  //     }
  }
    }
  
  }