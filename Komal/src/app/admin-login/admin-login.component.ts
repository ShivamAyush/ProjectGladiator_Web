import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var input=document.querySelector('.pswrd');
    var show=document.querySelector('.show');
    show.addEventListener('click',active);
    // function active(){
    //   if(input.type=== "password"){
    //     input.type="text";
    //     show.style.color="#1DA1F2";
    //     show.textContent= "HIDE";
    //   }
    //   else{
    //     input.type="password";
    //     show.textContent= "SHOW";
    //     show.style.color="#111";
    //   }

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
  }

}
