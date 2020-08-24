import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import {Login} from './Login'
import {Router} from '@angular/router'
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../main.css']
})
export class LoginComponent implements OnInit {
  constructor(private service:LoginService,private router:Router) { }
  ngOnInit(): void {
  var input:HTMLInputElement=document.querySelector('.pswrd');
  var show:HTMLInputElement=document.querySelector('.show');
  show.addEventListener('click',active);
  function active(){
      if(input.type === "password"){
        input.type="text";
        show.style.color="#1DA1F2";
        show.textContent= "HIDE";
      }
      else{
        input.type="password";
        show.textContent= "SHOW";
        show.style.color="#111";
      }
  }
  
  }
  Login = new Login();
  message:string;
  loginUser(){
    this.service.login(this.Login).subscribe(data =>{
      alert(JSON.stringify("Logining you in..."));
      if(data.status == 'SUCCESS'){
        let customerId=data.customerId;
        let name=data.customerFirstName;
        sessionStorage.setItem('customerId',String(customerId));
        sessionStorage.setItem('customerName',name);
        this.router.navigate(['/userDashboard']);
      }
      else{
        this.message=data.message;
      }
    })
  }

}
