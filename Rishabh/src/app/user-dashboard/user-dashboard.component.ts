import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  getDatetime = new Date();
  path="/My Account & Profile"
  constructor(private location: LocationStrategy) {  
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
    alert(JSON.stringify("Please logout to end your session!"));
    history.pushState(null, null, window.location.href);
    });  
  }
  ngOnInit(): void {
  }

}
