import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-status',
  templateUrl: './complaint-status.component.html',
  styleUrls: ['./complaint-status.component.css']
})
export class ComplaintStatusComponent implements OnInit {

  constructor() { }
  images = ["/assets/459CT.png", "/assets/RBSKW.png", "/assets/W93BX.png"]

  imagePath=this.images[Math.floor(Math.random() * this.images.length)];
  ngOnInit(): void {
  }

}
