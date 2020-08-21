import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {
  getDatetime = new Date();
  userName = "Rishabh";
  constructor() { }

  ngOnInit(): void {
  }

}
