import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var input1=document.querySelector('.pswrd1');
    var show1=document.querySelector('.show1');
    show1.addEventListener('click',active);

    var input2=document.querySelector('.pswrd2');
    var show2=document.querySelector('.show2');
    show2.addEventListener('click',active1);

    var input3=document.querySelector('.pswrd3');
    var show3=document.querySelector('.show3');
    show3.addEventListener('click',active2);

    var input4=document.querySelector('.pswrd4');
    var show4=document.querySelector('.show4');
    show4.addEventListener('click',active3);

    function active(){
        if(input1.type === "password"){
            input1.type="text";
            show1.style.color="#1DA1F2";
            show1.textContent= "HIDE";
        }
        else{
            input1.type="password";
            show1.textContent= "SHOW";
            show1.style.color="#111";
        }
    }
    
    function active1(){
        if(input2.type === "password"){
            input2.type="text";
            show2.style.color="#1DA1F2";
            show2.textContent= "HIDE";
        }
        else{
            input2.type="password";
            show2.textContent= "SHOW";
            show2.style.color="#111";
        }
    }

    
    function active2(){
        if(input3.type === "password"){
            input3.type="text";
            show3.style.color="#1DA1F2";
            show3.textContent= "HIDE";
        }
        else{
            input3.type="password";
            show3.textContent= "SHOW";
            show3.style.color="#111";
        }
    }
   
    function active3(){
        if(input4.type === "password"){
            input4.type="text";
            show4.style.color="#1DA1F2";
            show4.textContent= "HIDE";
        }
        else{
            input4.type="password";
            show4.textContent= "SHOW";
            show4.style.color="#111";
        }
    }
  }

}
