import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
  getDatetime = new Date();
  userName = "Admin";
  path="/My Account & Profile"
  constructor() { }

  ngOnInit(): void {
  }

}
