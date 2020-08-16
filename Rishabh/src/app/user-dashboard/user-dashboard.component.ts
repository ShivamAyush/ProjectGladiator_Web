import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  getDatetime = new Date();
  userName = "Rishabh";
  path="/My Account & Profile"
  constructor() { }

  ngOnInit(): void {
  }

}
